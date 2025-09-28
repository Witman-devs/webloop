import { Box, Grid, Link, Modal, Typography } from "@mui/material";
import { useState } from "react";

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

export default function AudioViewer({ label, fileSrc }) {
  const [open, setOpen] = useState(false);

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
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              <audio controls src={fileSrc} style={{ width: "100%" }}>
                Your browser does not support the audio element.
              </audio>
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
