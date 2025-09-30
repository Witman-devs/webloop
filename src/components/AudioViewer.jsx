import { TextField, Grid, Link, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSound } from "../hook/SoundContext";
const flowKey = "EvidenceBoard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "50vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

export default function AudioViewer({ label, fileSrc, correctPassword, transcript }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  const [loadedTranscript, setTranscript] = useState("");
  const { playMainMusic, stopMainMusic, getLastPlayingMusic } = useSound();
  // Load transcript when the component mounts or when transcript prop changes
  useEffect(() => {
    async function fetchTranscript() {
      try {
        const response = await fetch(transcript);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const textContent = await response.text();
        setTranscript(textContent);
      } catch (error) {
        console.error("Could not load the transcript:", error);
        setTranscript("");
      }
    }

    if (transcript) {
      fetchTranscript();
    }
  }, [transcript]);

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
          <Grid size={8}>
            {
              password == correctPassword ?
                <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                  <audio controls src={fileSrc} style={{ width: "25vw" }}
                    onPlay={() => stopMainMusic()}
                    onPause={() => {
                      console.log("Resuming background music");
                      console.log(getLastPlayingMusic());
                      playMainMusic(getLastPlayingMusic())
                    }}
                    onEnded={() => playMainMusic(getLastPlayingMusic()._src)}>
                    Your browser does not support the audio element.
                  </audio>
                  <Typography variant="caption" color="textSecondary" sx={{ whiteSpace: "pre-wrap" }}>
                    {loadedTranscript}
                  </Typography></div> :
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  autoFocus={true}
                />
            }
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
