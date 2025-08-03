import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { CardContent, Stack, Typography } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight, Pause, Play } from "lucide-react";
import { Howl, Howler } from "howler"; // Import Howl and Howler

import { MUSIC } from "../consts";
import { blue } from "@mui/material/colors";
import { useSound } from '../SoundContext'; // Assuming you save the above code in SoundContext.js

// Assuming these are the actual paths from your project root
import sciFiDetective from '../assets/music/bgmusicdet2.mp3';
import clownCircus from '../assets/music/bgoutroug.mp3';
import WOOOO from '../assets/music/WOOOO.mp3';

// Map file names to imported assets
const importedMusic = {
  "bgmusicdet2.mp3": clownCircus,
  "bgoutroug.mp3": sciFiDetective,
  "WOOOO.mp3": WOOOO,
};


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
  const [musicId, setMusicId] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const soundRef = useRef(null); // useRef to persist the Howl instance
  const { getEffectiveVolume } = useSound();

  // Effect to load and manage the Howl sound
  useEffect(() => {
    // Stop any currently playing sound when musicId changes or component unmounts
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload(); // Unload to free up resources
    }

    useEffect(() => {
        // Set the global volume for Howler 
        if (sound) sound.volume(getEffectiveVolume('music', 1)); // Use the helper function to get effective volume
    }, [getEffectiveVolume]);
    const currentTrack = MUSIC[musicId];
    const soundSrc = importedMusic[currentTrack.fileName.split('/').pop()]; // Get the imported asset

    if (soundSrc) {
      const sound = new Howl({
        src: [soundSrc],
        html5: true, // Use HTML5 audio to prevent issues with large files or iOS
        loop: true,  // Loop the current track
        volume: getEffectiveVolume('music', 1), // Use the helper function to get effective volume
        onend: () => {
          // This would typically be for sequential play, but with loop: true, it might not fire
          // If you want sequential play without loop, you'd increment musicId here
        }
      });
      soundRef.current = sound;

      if (musicPlaying) {
        sound.play();
      }
    }

    // Cleanup function when component unmounts or dependencies change
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.unload();
        soundRef.current = null;
      }
    };
  }, [musicId]); // Re-run effect when musicId changes

  // Effect to handle play/pause state changes
  useEffect(() => {
    if (soundRef.current) {
      if (musicPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [musicPlaying]); // Re-run effect when musicPlaying changes


  const handlePlayPause = () => {
    setMusicPlaying(prev => !prev);
  };

  const handlePrevTrack = () => {
    setMusicId((prevId) => (prevId - 1 + MUSIC.length) % MUSIC.length);
    setMusicPlaying(true); // Start playing the new track immediately
  };

  const handleNextTrack = () => {
    setMusicId((prevId) => (prevId + 1) % MUSIC.length);
    setMusicPlaying(true); // Start playing the new track immediately
  };

  return (
    <Card sx={{ maxWidth: "250px" }}>
      <CardContent>
        <Typography marginBlockEnd="15px">{MUSIC[musicId]["label"]}</Typography>
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