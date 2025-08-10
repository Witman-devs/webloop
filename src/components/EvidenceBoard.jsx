import { Backdrop, Menu, MenuItem, Box, Typography } from "@mui/material";
import { X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useState, useCallback, useRef, useEffect } from "react";
import {
  ReactFlow,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  addEdge,
  Controls,
  MiniMap,
  useReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import pin_sfx from "../assets/sfx/minorlink.mp3";
import note_sfx from "../assets/sfx/note.mp3";
import remove_sfx from "../assets/sfx/remove.mp3";

import { useSound } from "../SoundContext"; // Assuming you save the above code in SoundContext.js
import Note from "./Note";
import Thread from "./Thread";
import DocumentEvidence from "./DocumentEvidence";
import ImageEvidence from "./ImageEvidence";
import OrganRequestEvidance from "./OrganRequestEvidance";

// TODO: make easy connection from anywhere you drag
// TODO: label for threads/edges
const flowKey = "EvidenceBoard";

const nodeTypes = {
  note: Note,
  document: DocumentEvidence,
  image: ImageEvidence,
  organ_request: OrganRequestEvidance,
};

function CustomControls({ setEvidanceBoardOpen, save }) {
  // TODO: make instructions look better
  return (
    <>
      <X
        size={75}
        style={{
          top: "5px",
          right: "5px",
          position: "absolute",
          zIndex: 100,
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => {
          save();
          setEvidanceBoardOpen(false);
        }}
      />
    </>
  );
}

function Chart({ setEvidanceBoardOpen, rfInstance, setRfInstance, save }) {
  const reactFlowWrapper = useRef(null);
  const { getEffectiveVolume } = useSound();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const { setViewport } = useReactFlow();
  const [contextMenu, setContextMenu] = useState(null);

  const pin_sound = new Howl({
    src: [pin_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume("sfx", 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true,
  });

  const unpin_sound = new Howl({
    src: [remove_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume("sfx", 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true,
  });

  const paper_sound = new Howl({
    src: [note_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume("sfx", 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true,
  });

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onConnect = useCallback((params) => {
    pin_sound.play(); // Play the sound effect
    params["type"] = "straight";
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();

    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );

    // Prevent text selection lost after opening the context menu on Safari and Firefox
    const selection = document.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      setTimeout(() => {
        selection.addRange(range);
      });
    }
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const addNode = useCallback(
    (e) => {
      paper_sound.play(); // Play the sound effect
      let newNodes = {
        id: uuidv4(),
        position: screenToFlowPosition({
          x: e.clientX,
          y: e.clientY,
        }),
        data: { label: `n${nodes.length + 1}` },
        origin: [0.5, 0.0],
        type: "note",
        dragHandle: ".noteHeader",
      };

      setNodes((nds) => {
        return nds.concat(newNodes);
      });
      handleClose();
    },
    [screenToFlowPosition, nodes]
  );

  const onNodesDelete = useCallback(
    (deleted) => {
      unpin_sound.play(); // Play the sound effect
      let remainingNodes = [...nodes];
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, remainingNodes, acc);
          const outgoers = getOutgoers(node, remainingNodes, acc);
          const connectedEdges = getConnectedEdges([node], acc);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          remainingNodes = remainingNodes.filter((rn) => rn.id !== node.id);

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const deleteEdge = useCallback(
    (_, edge) => {
      setEdges((eds) => eds.filter((e) => e.id != edge.id));
    },
    [edges]
  );

  return (
    <div
      className="wrapper"
      style={{ width: "100vw", height: "100vh", zIndex: 50 }}
      ref={reactFlowWrapper}
    >
      <Box
        sx={{
          width: "190px",
          padding: "10px",
          backgroundColor: "white",
          boxShadow: 2,
          borderRadius: "8px",
          position: "absolute",
          top: "70px",
          right: "20px",
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: "4px" }}>
          Instructions
        </Typography>
        <Typography sx={{ fontSize: "11px" }}>
          1. Right click to add a note <br />
          2. Select a note and BackSpace to delete the note <br />
          3. Drag across pins on notes to join them <br />
          4. Double click to remove thread <br />
          5. Double click the note to edit it
        </Typography>
      </Box>
      <ReactFlow
        style={{
          "--xy-edge-stroke-default": "#5f1313ff",
          "--xy-edge-stroke-width-default": 5,
        }}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodesDelete={onNodesDelete}
        onEdgesChange={onEdgesChange}
        connectionLineComponent={Thread}
        onConnect={onConnect}
        onInit={(props) => {
          setRfInstance(props);
          onRestore();
        }}
        onContextMenu={handleContextMenu}
        onEdgeDoubleClick={deleteEdge}
        fitView
      >
        <CustomControls
          setEvidanceBoardOpen={setEvidanceBoardOpen}
          save={save}
        />
        <Controls />
        <MiniMap />
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={(e) => addNode(e)}>Add Note</MenuItem>
        </Menu>
      </ReactFlow>
    </div>
  );
}

export default function EvidenceBoard({
  evidanceBoardOpen,
  setEvidanceBoardOpen,
}) {
  const [rfInstance, setRfInstance] = useState(null);
  
  const save = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);


  const handleKeyPress = useCallback((event) => {
    if (event.ctrlKey && event.code === "Space") {
      if (evidanceBoardOpen) save(); // Save the flow before closing
      setEvidanceBoardOpen((prev) => !prev);
    }
  }, [evidanceBoardOpen, save]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      {evidanceBoardOpen && (
        <Backdrop
          sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
          open={true}
        >
          <ReactFlowProvider>
            <Chart setEvidanceBoardOpen={setEvidanceBoardOpen} rfInstance={rfInstance} setRfInstance={setRfInstance} save={save} />
          </ReactFlowProvider>
        </Backdrop>
      )}
    </>
  );
}
