import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography, Stack, Fade, IconButton } from '@mui/material';
import MonochromeButton from "./components/MonochromeButton";
import IntroHowler from "./components/IntroHowler";
import backpng from "./assets/detback.png";
import link_hit_sfx from './assets/sfx/linkhit.mp3';
import menu_hit_sfx from './assets/sfx/menuhit.mp3';
import Modal from 'react-modal';
import { VolumeControls, useSound } from './SoundContext'; // Assuming you save the above code in SoundContext.js
import '../src/smoke.css';
import { NavLink, useNavigate } from 'react-router';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        padding: '24px', // Add some default padding to the modal content area
        borderRadius: '8px', // Optional: Add some rounded corners
        backgroundColor: 'background.paper', // Or a specific color like '#fff'
        boxShadow: '0px 4px 20px rgba(0,0,0,0.2)', // Optional: Add a subtle shadow
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Example: default dark overlay
        zIndex: 1300, // Set a high z-index for the overlay
    },
};
/**
 * A main menu component for a game.
 * @param {object} props - The component props.
 * @param {function(boolean): void} props.setStart - The state setter function to start the game.
 */
const MainMenu = () => {
    const { getEffectiveVolume } = useSound();
    const [creditsIsOpen, setCreditsIsOpen] = React.useState(false);
    const [optionsIsOpen, setOptionsIsOpen] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const numberOfRaindrops = 100;
        const rainContainer = document.querySelector('.rain');
        const numberOfSmokeParticles = 50; 
        const smokeContainer = document.querySelector('.smog');
    
        for (let i = 0; i < numberOfRaindrops; i++) {
          const raindrop = document.createElement('div');
          raindrop.classList.add('raindrop');
    
          raindrop.style.left = `${Math.random() * 100}vw`; 
          raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; 
    
          rainContainer.appendChild(raindrop);
        }
    
         for (let i = 0; i < numberOfSmokeParticles; i++) {
          const smokeParticle = document.createElement('div');
          smokeParticle.classList.add('smoke-particle');
        
          const size = Math.random() * 60 + 20; 
          smokeParticle.style.width = `${size}px`;
          smokeParticle.style.height = `${size}px`;
    
          smokeParticle.style.left = `${Math.random() * 100}vw`; 
          smokeParticle.style.top = `${Math.random() * 100}vh`; 
    
          smokeContainer.appendChild(smokeParticle);
        }
      }, []);

    // Handler for the start button
    const handleStartGame = () => {
        menu_hit.play(); 
        navigate('/game');
    };

    const handleOptions = () => {
        link_hit.play(); 
        setOptionsIsOpen(true);
    };

    const handleCredits = () => {
        link_hit.play(); 
        setCreditsIsOpen(true);
    };

    const closeOptions = () => {
        link_hit.play(); 
        setOptionsIsOpen(false);
    };

    const closeCredits = () => {
        link_hit.play(); 
        setCreditsIsOpen(false);
    };

    const menu_hit = new Howl({
        src: [menu_hit_sfx],
        autoplay: false,
        loop: false,
        volume: getEffectiveVolume('sfx', 1),
        preload: true
    });


    const link_hit = new Howl({
        src: [link_hit_sfx],
        autoplay: false,
        loop: false,
        volume: getEffectiveVolume('sfx', 1),
        preload: true
    });

    return (
        <Box
            sx={{
                backgroundImage: `url(${backpng})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
            }}
        >
            <IntroHowler />
            <Box
                sx={{
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    alignItems: 'center', 
                    minHeight: '100vh', 
                    padding: 3, 

                }}
            >
                <Fade in={true} timeout={1000}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', 
                            justifyContent: 'center',
                            color: 'text.primary',
                            textAlign: 'center',
                            maxWidth: '50vw', 
                            width: '100%', 
                            marginRight: { xs: 0, sm: '50px' }, 
                        }}
                    >
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                letterSpacing: '0.1em',
                                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                            }}
                        >
                            The Golden Mare
                        </Typography>

                        <Typography variant="h5" component="p" sx={{ mb: 6, color: 'text.secondary' }}>
                            My justice coils, a perfect, endless round.
                        </Typography>

                        <Stack spacing={2} sx={{ minWidth: '250px' }}>
                            <MonochromeButton onClick={handleStartGame}>Start Game</MonochromeButton>
                            <MonochromeButton onClick={handleOptions}>Options</MonochromeButton>
                            <MonochromeButton onClick={handleCredits}>Credits</MonochromeButton>
                        </Stack>
                    </Box>
                </Fade>
            </Box>
            <div className="smog"></div>
            <div className="rain"></div>
            <Modal
                isOpen={optionsIsOpen}
                onRequestClose={closeOptions}
                style={customStyles}
                contentLabel="Options Modal"
            >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h4" component="h2"> Options </Typography>
                        <IconButton onClick={closeOptions} aria-label="close credits">
                            X
                        </IconButton>
                    </Box>
                    <VolumeControls />
            </Modal>
            <Modal
                isOpen={creditsIsOpen}
                onRequestClose={closeCredits}
                style={customStyles}
                contentLabel="Credits Modal"
            >
                {/* Use a Box with padding for the main content of the modal */}
                <Box sx={{ p: 2 }}> {/* This padding is *inside* the modal's content area */}
                    {/* Header with Title and Close Button */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h4" component="h2">Credits</Typography>
                        <IconButton onClick={closeCredits} aria-label="close credits">
                            X
                        </IconButton>
                    </Box>

                    {/* Credits Content */}
                    <Typography variant="body1">Game developed by:</Typography>
                    <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
                        <li><Typography variant="body1">WitmanDev</Typography></li>
                        <li><Typography variant="body1">DivergentRoot</Typography></li>
                        <li><Typography variant="body1">LuridNub</Typography></li>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

// Define prop types for type checking and better developer experience
MainMenu.propTypes = {
    setStart: PropTypes.func.isRequired,
};

export default MainMenu;