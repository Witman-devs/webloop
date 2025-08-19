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
  Tooltip,
} from "@mui/material";
import MonochromeButton from "./components/MonochromeButton";
import Modal from "react-modal";
import { useSound } from "./hook/SoundContext"; // Assuming you save the above code in SoundContext.js
import VolumeController from "./components/VolumeController";
import "./MainMenu.css";
import { useNavigate } from "react-router";
import { MUSIC_TITLE } from "./consts";
import { TriangleAlert, X } from "lucide-react";

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

const warningStyles = {
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
    backgroundColor: "black", // Or a specific color like '#fff'
    color: "white",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)", // Optional: Add a subtle shadow
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Example: default dark overlay
    zIndex: 1300, // Set a high z-index for the overlay
  },
};

export default function MainMenu() {
  const { playMainMusic, playSFXMusic } = useSound();
  const [warnIsOpen, setWarnIsOpen] = React.useState(true);
  const [creditsIsOpen, setCreditsIsOpen] = React.useState(false);
  const [optionsIsOpen, setOptionsIsOpen] = React.useState(false);
  const navigate = useNavigate();

  // Rain and smoke effect
  useEffect(() => {
    const numberOfRaindrops = 100;
    const rainContainer = document.querySelector(".rain");

    for (let i = 0; i < numberOfRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");

      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

      rainContainer.appendChild(raindrop);
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
    <Box>
      <div style={{ width: "50vw", overflow: "clip" }}>
        <div className="blackLayer" />
        <div className="whiteLayer" />
      </div>
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
                letterSpacing: "0.07em",
                fontFamily: 'Cinzel, cursive',
                background: 'linear-gradient(90deg, #0d0c0cff, #a7852dff, #0d0c0cff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: "4px 4px 3px rgba(0,0,0,0.5)",
              }}
            >
              The Golden Mare
            </Typography>

            <Typography
              variant="h4"
              component="h4"
              sx={{ mb: 6, 
                fontWeight: 600,
                fontFamily: 'Crimson Pro, serif',
                color: "text.secondary"}}
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
      {/* Credit Modal */}
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
                <Link
                  marginInlineStart={1}
                  target="_blank"
                  href="https://www.dicebear.com/"
                >
                  https://www.dicebear.com/
                </Link>
              </li>
              <li>
                Paper texture:
                <Link
                  marginInlineStart={1}
                  target="_blank"
                  href="https://www.transparenttextures.com"
                >
                  https://www.transparenttextures.com/
                </Link>
              </li>
              <li>
                Handwritten generator:
                <Link
                  marginInlineStart={1}
                  target="_blank"
                  href="https://texttohandwriting.in/"
                >
                  https://texttohandwriting.in/
                </Link>
              </li>
              <li>
                Data is generated using fakerJs:
                <Link
                  marginInlineStart={1}
                  target="_blank"
                  href="https://fakerjs.dev/"
                >
                  https://fakerjs.dev/
                </Link>
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
      {/* Warning modal */}
      <Modal
        isOpen={warnIsOpen}
        style={warningStyles}
        contentLabel="Warning Modal"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <TriangleAlert />
          <Typography variant="h4" style={{ textAlign: "center",fontFamily: 'Anton, sans-serif' }}>
            Cautionary Warning!
          </Typography>
          <TriangleAlert />
        </Box>
        <Box
          sx={{
            width: "50vw",
            minHeight: "50vh",
            padding: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography sx={{fontFamily: 'Anton, sans-serif'}} variant="h4"> Warning: </Typography>
          <Typography variant="h5" marginBlockEnd={1}>
            This game includes strong language. This is about you exploring
            cases about a suicide(s) and Murder(s) and organ trafficking. No
            visuals as such just the suggestion of it.
          </Typography>
          <Typography variant="h5" marginBlockEnd={3}>
            Story matching with anyone is purely coincidental. This is for
            entertainment purposes only
          </Typography>
          <MonochromeButton
            style={{ backgroundColor: "white", width: "100%" }}
            onClick={() => setWarnIsOpen(false)}
          >
            Okay!
          </MonochromeButton>
        </Box>
      </Modal>
    </Box> 
  );
}
