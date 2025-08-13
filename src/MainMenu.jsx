import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  Stack,
  Fade,
  IconButton,
  Link,
} from "@mui/material";
import MonochromeButton from "./components/MonochromeButton";
// import IntroHowler from "./components/IntroHowler";
import backpng from "./assets/detback.png";
import Modal from "react-modal";
import { useSound } from "./hook/SoundContext"; // Assuming you save the above code in SoundContext.js
import VolumeController from "./components/VolumeController";
import "../src/smoke.css";
import { NavLink, useNavigate } from "react-router";
import { MUSIC_TITLE } from "./consts";
import { X } from "lucide-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    padding: "24px", // Add some default padding to the modal content area
    borderRadius: "8px", // Optional: Add some rounded corners
    backgroundColor: "background.paper", // Or a specific color like '#fff'
    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)", // Optional: Add a subtle shadow
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Example: default dark overlay
    zIndex: 1300, // Set a high z-index for the overlay
  },
};

export default function MainMenu() {
  const { getEffectiveVolume, playMainMusic, playSFXMusic } = useSound();
  const [creditsIsOpen, setCreditsIsOpen] = React.useState(false);
  const [optionsIsOpen, setOptionsIsOpen] = React.useState(false);
  const navigate = useNavigate();

  // Rain and smoke effect
  useEffect(() => {
    const numberOfRaindrops = 100;
    const rainContainer = document.querySelector(".rain");
    const numberOfSmokeParticles = 50;
    const smokeContainer = document.querySelector(".smog");

    for (let i = 0; i < numberOfRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");

      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

      rainContainer.appendChild(raindrop);
    }

    for (let i = 0; i < numberOfSmokeParticles; i++) {
      const smokeParticle = document.createElement("div");
      smokeParticle.classList.add("smoke-particle");

      const size = Math.random() * 60 + 20;
      smokeParticle.style.width = `${size}px`;
      smokeParticle.style.height = `${size}px`;

      smokeParticle.style.left = `${Math.random() * 100}vw`;
      smokeParticle.style.top = `${Math.random() * 100}vh`;

      smokeContainer.appendChild(smokeParticle);
    }
  }, []);

  useEffect(() => {
    playMainMusic(MUSIC_TITLE.MainMenu);
  }, []);

  // Handler for the start button
  const handleStartGame = () => {
    playSFXMusic(MUSIC_TITLE.StartGame);
    navigate("/game");
  };

  const handleOptions = () => {
    playSFXMusic(MUSIC_TITLE.MainMenuLink);
    setOptionsIsOpen(true);
  };

  const handleCredits = () => {
    playSFXMusic(MUSIC_TITLE.MainMenuLink);
    setCreditsIsOpen(true);
  };

  const closeOptions = () => {
    playSFXMusic(MUSIC_TITLE.MainMenuLink);
    setOptionsIsOpen(false);
  };

  const closeCredits = () => {
    playSFXMusic(MUSIC_TITLE.MainMenuLink);
    setCreditsIsOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backpng})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          minHeight: "100vh",
          padding: 3,
        }}
      >
        <Fade in={true} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "text.primary",
              textAlign: "center",
              maxWidth: "50vw",
              width: "100%",
              marginRight: { xs: 0, sm: "50px" },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 2,
                letterSpacing: "0.1em",
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              The Golden Mare
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{ mb: 6, color: "text.secondary" }}
            >
              My justice coils, a perfect, endless round.
            </Typography>

            <Stack spacing={2} sx={{ minWidth: "250px" }}>
              <MonochromeButton onClick={handleStartGame}>
                Start Game
              </MonochromeButton>
              <MonochromeButton onClick={handleOptions}>
                Settings
              </MonochromeButton>
              <MonochromeButton onClick={handleCredits}>
                Credits
              </MonochromeButton>
            </Stack>
          </Box>
        </Fade>
      </Box>
      <div className="smog"></div>
      <div className="rain"></div>

      {/* settings modal */}
      <Modal
        isOpen={optionsIsOpen}
        onRequestClose={closeOptions}
        style={customStyles}
        contentLabel="Options Modal"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h4" component="h2">
            Settings
          </Typography>
          <IconButton onClick={closeOptions} aria-label="Close settings">
            <X />
          </IconButton>
        </Box>
        <VolumeController />
      </Modal>

      <Modal
        isOpen={creditsIsOpen}
        onRequestClose={closeCredits}
        style={customStyles}
        contentLabel="Credits Modal"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h4">Credits</Typography>
          <IconButton onClick={closeCredits} aria-label="close credits">
            <X />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "50vw",
            minHeight: "50vh",
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5"> Game Origin: </Typography>
          <Typography variant="body1" marginBlockEnd={3}>
            This game was created as a part of GMTK Game jam 2025. The story is
            fictional and is created for entertainment purpose only.
          </Typography>
          <Typography variant="h5">Game developed by:</Typography>
          <Box
            component="ul"
            sx={{
              p: 0,
              marginBlockEnd: 3,
              marginBlockStart: 0,
            }}
          >
            <ul>
              <li>
                <Typography variant="subtitle1">WitmanDev</Typography>
              </li>
              <li>
                <Typography variant="subtitle1">DivergentRoot</Typography>
              </li>
              <li>
                <Typography variant="subtitle1">LuridNub</Typography>
              </li>
            </ul>
          </Box>
          <Typography variant="h5">Asset Used:</Typography>
          <Typography variant="subtitle2">
            <ul>
              <li>
                Persona generation:
                <Link marginInlineStart={1} target="_blank" href="https://www.dicebear.com/">
                  https://www.dicebear.com/
                </Link>
              </li>
              <li>
                Paper texture:
                <Link marginInlineStart={1}
                  target="_blank"
                  href="https://www.transparenttextures.com"
                >
                  https://www.transparenttextures.com/
                </Link>
              </li>
              <li>
                Handwritten generator:
                <Link marginInlineStart={1} target="_blank" href="https://texttohandwriting.in/">
                  https://texttohandwriting.in/
                </Link>
              </li>
              <li>
                Data is generated using fakerJs:
                <Link marginInlineStart={1} target="_blank" href="https://fakerjs.dev/">
                  https://fakerjs.dev/
                </Link>
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
