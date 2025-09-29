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
  height: "20vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

export default function AudioViewer({ label, fileSrc, correctPassword }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [audioLevel, _] = useState(()=>parseFloat(localStorage.getItem("musicVolume")) || 0);
  const {setMusicVolume} = useSound();

  useEffect(()=>{
    console.log("audio", audioLevel)
    if(open) 
      setMusicVolume(0)
    else
      setMusicVolume(audioLevel)
  }, [open])

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
          <Grid size={6}>
            {
              password == correctPassword?
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              <audio controls src={fileSrc} style={{ width: "100%" }}>
                Your browser does not support the audio element.
              </audio>
            </Typography>:
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
