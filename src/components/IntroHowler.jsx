import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

// Import your song files directly
import phase1_song from '../assets/music/intro.wav';
import phase2_song from '../assets/music/pickup.wav';
import phase3_song from '../assets/music/chorus.wav';
import rain_sound from '../assets/music/rain.mp3';

const IntroHowler = () => {
    const [currentPhase, setCurrentPhase] = useState(0);

    // Define your sound objects using the imported files
    const phases = [
        { id: 0, src: phase1_song },
        { id: 1, src: phase2_song },
        { id: 2, src: phase3_song },
    ];

    // Create an array of Howl instances
    const sounds = phases.map(phase => new Howl({
        src: [phase.src],
        autoplay: false,
        loop: false,
    }));

    const rain = new Howl({
        src: [rain_sound],
        autoplay: true,
        loop: true,
        volume: 0.1
    });

    // The rest of the useEffect hook and control functions remain the same
    useEffect(() => {
        sounds[currentPhase].play();
        sounds[currentPhase].on('end', () => {
            if (currentPhase < phases.length - 1) {
                setCurrentPhase(currentPhase + 1);
            } else {
                setCurrentPhase(1);
            }
        });

        return () => {
            sounds[currentPhase].off('end');
        };
    }, [currentPhase]);

    return (
        <></>
    );
};

export default IntroHowler;