import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { CardContent, Stack, Typography } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight, Pause, Play, Music } from "lucide-react";
import { MUSIC, MUSIC_TITLE } from "../consts";
import { useSound } from '../hook/SoundContext'; 


const FloatStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "black", 
  position: "fixed",
  top: "calc(100vh - 60px)",
  zIndex: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

// TODO: play the whole playlist automatically
function MusicControl() {
  const [musicId, setMusicId] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const { playMainMusic, stopMainMusic } = useSound();

  useEffect(()=>{
    playMainMusic(MUSIC.main[musicId].label)
  }, [musicId])

  const handlePlayPause = () => {
    if(musicPlaying) stopMainMusic();
    else playMainMusic(MUSIC.main[musicId].label);
    setMusicPlaying(prev => !prev);
  };

  const handlePrevTrack = () => {
    setMusicId((prevId) => (prevId - 1 + MUSIC.main.length) % MUSIC.main.length);
    setMusicPlaying(true)
  };

  const handleNextTrack = () => {
    setMusicId((prevId) => (prevId + 1) % MUSIC.main.length);
    setMusicPlaying(true)
  };

  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardContent>
        <Typography marginBlockEnd="15px">{MUSIC.main[musicId]["label"]}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <ArrowBigLeft
            onClick={handlePrevTrack}
            style={{ cursor: 'pointer' }}
          />
          {musicPlaying ? (
            <Pause onClick={handlePlayPause} style={{ cursor: 'pointer' }} />
          ) : (
            <Play onClick={handlePlayPause} style={{ cursor: 'pointer' }} />
          )}
          <ArrowBigRight
            onClick={handleNextTrack}
            style={{ cursor: 'pointer' }}
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
      {/* <div>Hello</div> */}
      <MusicControl />
    </Stack>
  );
}

export default function Floaty() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Updated the floating button to be black with a music icon */}
      <div style={FloatStyle} onClick={() => setMenuOpen(!menuOpen)}>
        <Music color="white" size={32} />
      </div>
      <FloatMenuStack open={menuOpen} />
    </>
  );
}