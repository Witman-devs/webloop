import { Box, Link, Modal, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MonochromeButton from "./MonochromeButton";
import Cipher from "../assets/notes/cipher.png";
import Grille from "../assets/notes/grille.png";
import LetterViewer from "./LetterViewer";

const flowKey = "EvidenceBoard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "36px",
  overflowY: "scroll",
  maxHeight: "80vh",
};

export default function ViewGrilleCipher() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let docs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    let exist = true;
    if (!docs.includes("What could this be used for?")) exist = false;
    if (!docs.includes("A grid of random letters..")) exist = false;
    if (!exist) setMessage("");
    else setMessage("Document Already Added to evidence board");
  }, [open]);

  const addToEvidenceBoard = () => {
    let missingIds = [];
    let docs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    
    if (!docs.includes("What could this be used for?")) missingIds.push("What could this be used for?");
    if (!docs.includes("A grid of random letters..")) missingIds.push("A grid of random letters..");
    let flow = JSON.parse(localStorage.getItem(flowKey));
    if (!flow)
      flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
    if (missingIds.includes('What could this be used for?')) {
      flow.nodes.push({
        id: 'What could this be used for?',
        position: {
          x: Math.random() * 150,
          y: Math.random() * 150,
        },
        data: { image: Grille, label: "Grille" },
        origin: [0.5, 0.0],
        type: "transparent",
      });
    }
    if (missingIds.includes('A grid of random letters..')) {
      flow.nodes.push({
        id: 'A grid of random letters..',
        position: {
          x: 0,
          y: 0,
        },
        data: { image: Cipher, label: "Cipher" },
        origin: [0.5, 0.0],
        type: "image",
      });
    }
    localStorage.setItem(flowKey, JSON.stringify(flow));
    localStorage.setItem(
      "addedDocuments",
      JSON.stringify([...docs, ...missingIds])
    );
    setMessage("Document Already Added to evidence board");
  };

  return (
    <>
      <Link component="span" onClick={() => setOpen(true)}>
        View Cipher
      </Link>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            Cipher
          </Typography>
          <Stack marginBlockEnd={5} spacing={2}>
            <LetterViewer image={Cipher} fileSrc={"Cipher"} label="A grid of random letters.." />
            <LetterViewer image={Grille} fileSrc={"Grille"} label="What could this be used for?" />
          </Stack>
          {message ? (
            <Typography variant="h6" color="text.secondary">
              {message}
            </Typography>
          ) : (
            <MonochromeButton onClick={() => addToEvidenceBoard()}>
              Add to evidence board
            </MonochromeButton>
          )}
        </Box>
      </Modal>
    </>
  );
}
