import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { CardContent, Stack, Typography } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight, Pause, Play, Music } from "lucide-react";
import { MUSIC, MUSIC_TITLE } from "../consts";
import { useSound } from '../hook/SoundContext'; 


// TODO: play the whole playlist automatically
function MusicControl() {
  const [musicId, setMusicId] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const { playMainMusic, stopMainMusic } = useSound();

  const playNextSong = ()=>{
    setMusicId(prev=>(prev+1)%MUSIC.main.length)
  }

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

export default function FloatMenuStack({ open }) {
  return (
    <Stack
      style={{
        position: "fixed",
        top: "200px",
        left:"50px",
        display: open ? "block" : "none",
        zIndex:200
      }}
    >
      {/* <div>Hello</div> */}
      <MusicControl />
    </Stack>
  );
}