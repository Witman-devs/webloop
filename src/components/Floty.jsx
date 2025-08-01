import { blue } from "@mui/material/colors";
import { useState } from "react";
import Card from "@mui/material/Card";
import { CardContent, Stack, Typography } from "@mui/material";

import { ArrowBigLeft, ArrowBigRight, Pause, Play } from "lucide-react";
import { MUSIC } from "../consts";

// TODO: use anchor point css for stack to point to floty icon

const FloatStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: blue[500],
  position: "fixed",
  top: "calc(100vh - 60px)",
  zIndex: 20
};

function MusicControl() {
  //TODO: set from last settings
  const [musicId, setMusicId] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardContent>
        <Typography marginBlockEnd="15px">{MUSIC[musicId]["label"]}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <ArrowBigLeft
            onClick={() => {
              setMusicId((musicId - 1 + MUSIC.length) % MUSIC.length);
            }}
          />
          {musicPlaying ? (
            <Play onClick={() => setMusicPlaying(!musicPlaying)} />
          ) : (
            <Pause onClick={() => setMusicPlaying(!musicPlaying)} />
          )}
          <ArrowBigRight
            onClick={() => {
              setMusicId((musicId + 1) % MUSIC.length);
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

function FloatMenuStack({ open }) {
  return (
    <Stack
      style={{
        position: "fixed",
        top: "calc(100vh - 190px)",
        display: open ? "block" : "none",
        zIndex:20
      }}
    >
      <div>Hello</div>
      <MusicControl />
    </Stack>
  );
}

export default function Floaty() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div style={FloatStyle} onClick={() => setMenuOpen(!menuOpen)} />
      <FloatMenuStack open={menuOpen} />
    </>
  );
}
