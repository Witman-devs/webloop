import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Slider, Typography, Stack, Box } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import link_hit_sfx from './assets/sfx/linkhit.mp3';

// 1. Create the Sound Context
const SoundContext = createContext(null);

// 2. Custom Hook for Sound Context
export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

// 3. Sound Provider Component
export const SoundProvider = ({ children }) => {
  const [masterVolume, setMasterVolume] = useState(() => {
    // Load from localStorage or default to 0.7 (70%)
    const storedVolume = localStorage.getItem('masterVolume');
    return storedVolume ? parseFloat(storedVolume) : 0.7;
  });
  const [sfxVolume, setSfxVolume] = useState(() => {
    const storedVolume = localStorage.getItem('sfxVolume');
    return storedVolume ? parseFloat(storedVolume) : 0.8;
  });
  const [musicVolume, setMusicVolume] = useState(() => {
    const storedVolume = localStorage.getItem('musicVolume');
    return storedVolume ? parseFloat(storedVolume) : 0.6;
  });

  // Persist volume settings to localStorage
  useEffect(() => {
    localStorage.setItem('masterVolume', masterVolume.toString());
  }, [masterVolume]);

  useEffect(() => {
    localStorage.setItem('sfxVolume', sfxVolume.toString());
  }, [sfxVolume]);

  useEffect(() => {
    localStorage.setItem('musicVolume', musicVolume.toString());
  }, [musicVolume]);

  // Helper function to get effective volume for an audio source
  // This takes into account the master volume
  const getEffectiveVolume = useCallback((type, individualVolume) => {
    let baseVolume = 1;
    if (type === 'sfx') {
      baseVolume = sfxVolume;
    } else if (type === 'music') {
      baseVolume = musicVolume;
    }
    return masterVolume * baseVolume * individualVolume;
  }, [masterVolume, sfxVolume, musicVolume]);

  const value = {
    masterVolume,
    setMasterVolume,
    sfxVolume,
    setSfxVolume,
    musicVolume,
    setMusicVolume,
    getEffectiveVolume,
  };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

// 4. Volume Controls Component (Example of how to use the context)
export const VolumeControls = () => {
  const { masterVolume, setMasterVolume, sfxVolume, setSfxVolume, musicVolume, setMusicVolume } = useSound();


  const link_hit = new Howl({
      src: [link_hit_sfx],
      autoplay: false,
      loop: false,
      volume: sfxVolume, // Use the helper function to get effective volume
      // Preload to ensure it's ready before any fade operations
      preload: true
  });
  const handleMasterVolumeChange = (event, newValue) => {
    setMasterVolume(newValue);
  };

  const handleSfxVolumeChange = (event, newValue) => {
    link_hit.play()
    setSfxVolume(newValue);
  };

  const handleMusicVolumeChange = (event, newValue) => {
    setMusicVolume(newValue);
  };

  return (
    <Box sx={{ width: 300, padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        Audio Settings
      </Typography>

      <Stack spacing={2} direction="row" alignItems="center" marginBottom={2}>
        <VolumeUpIcon />
        <Typography>Master Volume</Typography>
        <Slider
          aria-label="Master Volume"
          value={masterVolume}
          onChange={handleMasterVolumeChange}
          min={0}
          max={1}
          step={0.01}
          valueLabelDisplay="auto"
        />
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center" marginBottom={2}>
        <AudiotrackIcon />
        <Typography>SFX Volume</Typography>
        <Slider
          aria-label="SFX Volume"
          value={sfxVolume}
          onChange={handleSfxVolumeChange}
          min={0}
          max={1}
          step={0.1}
          valueLabelDisplay="auto"
        />
      </Stack>

      <Stack spacing={2} direction="row" alignItems="center">
        <MusicNoteIcon />
        <Typography>Music Volume</Typography>
        <Slider
          aria-label="Music Volume"
          value={musicVolume}
          onChange={handleMusicVolumeChange}
          min={0}
          max={1}
          step={0.01}
          valueLabelDisplay="auto"
        />
      </Stack>
    </Box>
  );
};