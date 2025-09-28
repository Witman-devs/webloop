import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { MUSIC } from "../consts";
import { Howl, Howler } from "howler";


let currentMainMusic = null;
let currentAuxMusic = null;
let currentSFXMusic = null;

const SoundContext = createContext(null);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};

export const SoundProvider = ({ children }) => {
  // Load from localStorage or default to 0.7 (70%)
  const [masterVolume, setMasterVolume] = useState(() => {
    const storedVolume = localStorage.getItem("masterVolume");
    return storedVolume ? parseFloat(storedVolume) : 0.7;
  });
  const [sfxVolume, setSfxVolume] = useState(() => {
    const storedVolume = localStorage.getItem("sfxVolume");
    return storedVolume ? parseFloat(storedVolume) : 0.8;
  });
  const [musicVolume, setMusicVolume] = useState(() => {
    const storedVolume = localStorage.getItem("musicVolume");
    return storedVolume ? parseFloat(storedVolume) : 0.6;
  });

  // onChange save volume settings to the local storage
  useEffect(() => {
    localStorage.setItem("masterVolume", masterVolume.toString());
    updateMainMusicVolume(masterVolume*musicVolume);
    updateSFXMusicVolume(masterVolume*sfxVolume);
  }, [masterVolume]);

  useEffect(() => {
    localStorage.setItem("sfxVolume", sfxVolume.toString());
    updateSFXMusicVolume(masterVolume*sfxVolume);
  }, [sfxVolume]);

  useEffect(() => {
    localStorage.setItem("musicVolume", musicVolume.toString());
    updateMainMusicVolume(masterVolume*musicVolume);
  }, [musicVolume]);

  // This is to be used when you want to play couple of musics togather.
  // for eg: music1 at 100% and music2 at 50% this will help us combine the volume
  const getEffectiveVolume = useCallback(
    (type, individualVolume) => {
      let baseVolume = 1;
      if (type === "sfx") {
        baseVolume = sfxVolume;
      } else if (type === "music") {
        baseVolume = musicVolume;
      }
      return masterVolume * baseVolume * individualVolume;
    },
    [masterVolume, sfxVolume, musicVolume]
  );


  const playMainMusic = (musicTitle) => {
    if (currentMainMusic) {
      console.log("stoping current main music");
      currentMainMusic.stop();
      currentMainMusic.unload();
    }

    const mainTracks = MUSIC.main;
    const selectedTrack = mainTracks.find((value) => value.label === musicTitle);

    currentMainMusic = new Howl({
      src: selectedTrack.fileName,
      autoplay: true,
      loop: false,
      volume: masterVolume * musicVolume,
      autoUnlock: true,
      onloaderror(soundId, error) {
        console.warn("failed to load main song: ", soundId, " due to error ", error);
      },
      onplay(soundId) {
        console.log("playing main song: ", soundId);
      },
      onend() {
        // Play a random other main song (not the current one)
        const otherTracks = mainTracks.filter((track) => track.label !== musicTitle);
        if (otherTracks.length > 0) {
          const randomTrack = otherTracks[Math.floor(Math.random() * otherTracks.length)];
          playMainMusic(randomTrack.label);
        }
      },
    });
    let soundId = currentMainMusic.play();
    return currentMainMusic, soundId;
  };

  const stopMainMusic = () => {
    if (!currentMainMusic) console.log("Can't stop main music nothing playing");
    else currentMainMusic.stop();
  };

  const updateMainMusicVolume = (newVolume) => {
    if (!currentMainMusic){
      console.log("Can't update volume no main music");
      return;
    }
    currentMainMusic.volume(newVolume);
    updateAuxMusicVolume(newVolume); // Aux should always follow volume of main
  };

  const playAuxMusic = (musicTitle) => {
    if (currentAuxMusic) {
      console.log("stoping current AUX music");
      currentAuxMusic.stop();
      currentAuxMusic.unload();
    }

    currentAuxMusic = new Howl({
      src: MUSIC.main.filter((value) => value.label == musicTitle)[0].fileName,
      autoplay: true,
      loop: true,
      volume: musicVolume,
      autoUnlock: true,
      onloaderror(soundId, error) {
        console.warn("failed to load AUX song: ", soundId, " due to error ", error);
      },
      onplay(soundId) {
        console.log("playing AUX song: ", soundId);
      },
    });
    let soundId = currentAuxMusic.play();
    return currentAuxMusic, soundId;
  };

  const stopAuxMusic = () => {
    if (!currentAuxMusic) console.log("Can't stop Aux music nothing playing");
    else currentAuxMusic.stop();
  };

  const updateAuxMusicVolume = (newVolume) => {
    if (!currentAuxMusic) console.log("Can't update volume no Aux music");
    else currentAuxMusic.volume(newVolume);
  };

  const playSFXMusic = (musicTitle) => {
    if (currentSFXMusic) {
      console.log("stoping current sfx music");
      currentSFXMusic.stop();
      currentSFXMusic.unload();
    }

    currentSFXMusic = new Howl({
      src: MUSIC.sfx.filter((value) => value.label == musicTitle)[0].fileName,
      autoplay: true,
      loop: false,
      volume: sfxVolume,
      autoUnlock: true,
      onloaderror(soundId, error) {
        console.warn("failed to load sfx song: ", soundId, " due to error ", error);
      },
      onplay(soundId) {
        console.log("playing sfx song: ", soundId);
      },
    });
    let soundId = currentSFXMusic.play();
    return currentSFXMusic, soundId;
  };

  const stopSFXMusic = () => {
    if (!currentSFXMusic) console.log("Can't stop SFX music nothing playing");
    else currentSFXMusic.stop();
  };

  const updateSFXMusicVolume = (newVolume) => {
    if (!currentSFXMusic) console.log("Can't update volume no SFX music");
    else currentSFXMusic.volume(newVolume);
  };

  const value = {
    masterVolume,
    setMasterVolume,
    sfxVolume,
    setSfxVolume,
    musicVolume,
    setMusicVolume,
    getEffectiveVolume,

    // centeral player for Background music
    playMainMusic,
    stopMainMusic,
    updateMainMusicVolume,

    // centeral player for AUX music
    playAuxMusic,
    stopAuxMusic,
    updateAuxMusicVolume,

    // centeral player for SFX music
    playSFXMusic,
    stopSFXMusic,
    updateSFXMusicVolume,
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
};
