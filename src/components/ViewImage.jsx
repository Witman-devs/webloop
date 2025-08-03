import { Box, Link, Modal, Typography } from "@mui/material";
import { useState } from "react";
import MonochromeButton from "./MonochromeButton";
import { v4 as uuidv4 } from 'uuid';

const flowKey = "EvidenceBoard";
function addToEvidenceBoard(image, label) {
  let flow = JSON.parse(localStorage.getItem(flowKey));
  if (!flow) flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
  flow.nodes.push({
        id: uuidv4(),
        position: {
          x: 0,
          y: 0,
        },
        data: { image:image, label:label } ,
        origin: [0.5, 0.0],
        type: "image"
      });
  localStorage.setItem(flowKey, JSON.stringify(flow));
}

export default function ViewImage({ image, label }) {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Link component="span" onClick={() => setOpen(true)}>
        {label}
      </Link>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {label}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={image}
              alt="View"
              style={{ height: "100%", width: "auto" }}
            />
          </Typography>
        <MonochromeButton
          onClick={() => addToEvidenceBoard(image, label)}
        >
          Add to evidence board
        </MonochromeButton>
        </Box>
      </Modal>
    </>
  );
}
