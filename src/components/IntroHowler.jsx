import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

// Import your song files directly
import phase1_song from '../assets/music/mm.mp3';
import rain_sound from '../assets/music/rain.mp3';
import { useSound } from '../SoundContext'; // Assuming you save the above code in SoundContext.js

const IntroHowler = () => {
    // State to hold Howl instances
    const [rainSound, setRainSound] = useState(null);
    const [mainSong, setMainSong] = useState(null);
    const { getEffectiveVolume } = useSound();
    useEffect(() => {
        // Set the global volume for Howler 
        if (rainSound) rainSound.volume(0.1*getEffectiveVolume('music', 1)); // Use the helper function to get effective volume
        if (mainSong) mainSong.volume(getEffectiveVolume('music', 1)); // Use the helper function to get effective volume
    }, [getEffectiveVolume]);
    // Initialize sounds when the component mounts
    useEffect(() => {
        const rain = new Howl({
            src: [rain_sound],
            autoplay: true,
            loop: true,
            volume: 0.1*getEffectiveVolume('music', 1), // Use the helper function to get effective volume
            // Preload to ensure it's ready before any fade operations
            preload: true
        });

        const main = new Howl({
            src: [phase1_song],
            autoplay: true,
            loop: true,
            volume: getEffectiveVolume('music', 1), // Use the helper function to get effective volume
            preload: true
        });

        // Store instances in state
        setRainSound(rain);
        setMainSong(main);

        // Clean up sounds when the component unmounts
        return () => {
            if (rain) {
                rain.unload();
            }
            if (main) {
                main.unload();
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <></> // This component doesn't render any visible UI
    );
};

export default IntroHowler;