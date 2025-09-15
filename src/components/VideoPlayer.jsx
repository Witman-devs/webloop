// src/VideoPlayer.jsx
import React, { useRef, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { X } from 'lucide-react';

const VideoPlayer = ({ videoSrc, onVideoEnd, onSkip }) => {
  const videoRef = useRef(null);

  // Auto-play when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
        // Handle autoplay policy restrictions (e.g., show a play button)
      });
    }
  }, []);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
    onSkip(); // Call the parent's skip handler
  };

  const handleVideoEnded = () => {
    onVideoEnd(); // Notify parent when video finishes
  };

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video
        ref={videoRef}
        src={videoSrc}
        onEnded={handleVideoEnded}
        controls // Shows default browser controls (play/pause, volume, fullscreen)
        autoPlay // Try to autoplay, but be aware of browser policies
        style={{ maxWidth: '90%', maxHeight: '90%', outline: 'none' }}
      >
        Your browser does not support the video tag.
      </video>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSkip}
        sx={{ position: 'absolute', top: 20, right: 20 }}
      >
        <X />
      </Button>
    </Box>
  );
};

export default VideoPlayer;