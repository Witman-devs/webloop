import { Box, Grid, Link, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MonochromeButton from "./MonochromeButton";
import { v4 as uuidv4 } from "uuid";

const flowKey = "EvidenceBoard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

export default function LetterViewerPassword({ image, label, fileSrc, correctAnswer }) {
  const [open, setOpen] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const addToEvidenceBoard = (image, label) => {
    let flow = JSON.parse(localStorage.getItem(flowKey));
    if (!flow)
      flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
    flow.nodes.push({
      id: label,
      position: {
        x: Math.random() * 150,
        y: Math.random() * 150,
      },
      data: { image: image, label: label },
      origin: [0.5, 0.0],
      type: label.includes("hole") ? "transparent" : "image",
    });
    localStorage.setItem(flowKey, JSON.stringify(flow));
    let docs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    localStorage.setItem("addedDocuments", JSON.stringify([...docs, label]));
    setMessage("Document Already Added to evidence board");
  };

  useEffect(() => {
    let docs = JSON.parse(localStorage.getItem("addedDocuments"));
    if (!docs) return;
    if (docs.includes(label))
      setMessage("Document Already Added to evidence board");
    else setMessage("");
  }, [open]);

  useEffect(() => {
    const file = fileSrc;
    console.log(file);
    fetch(file)
      .then((r) => r.text())
      .then((text) => setFileContent(text));
  }, [fileSrc]);

  return (
    <>
      <Link component="span" onClick={() => setOpen(true)}>
        {label}
      </Link>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Grid container sx={style} rowGap={2}>
          <Grid size={8}>
            <Typography variant="h4" component="h2">
              {label}
            </Typography>
          </Grid>
          {password.toLowerCase() == correctAnswer ? (
            <>
              <Grid size={4} textAlign="end">
                {message ? (
                  <Typography variant="h6" color="text.secondary">
                    {message}
                  </Typography>
                ) : (
                  <MonochromeButton
                    onClick={() => addToEvidenceBoard(image, label)}
                  >
                    Add to evidence board
                  </MonochromeButton>
                )}
              </Grid>
              <Grid size={6}>
                <Typography variant="body1">
                  <pre style={{ whiteSpace: "pre-wrap" }}>{fileContent}</pre>
                </Typography>
              </Grid>
              <Grid size={6}>
                <Typography sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={image} alt="View" height="700px" />
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                autoFocus={true}
              />
            </>
          )}
        </Grid>
      </Modal>
    </>
  );
}
