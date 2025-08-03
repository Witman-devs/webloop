import React, { useState , useEffect } from 'react';
import { Card, CardContent, Link, Stack, Typography } from "@mui/material";
import AntagonistLogo from "../components/AntagonistLogo";
import '../smoke.css';

export default function Home({setPageName}) {
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

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntagonistLogo size="200px" setPageName={setPageName} />
      <div className="smog"></div>
      <div className="rain"></div>
      <Typography variant="h2">Hello Detective</Typography>
      <Typography width="80%" align="center">
        Its been a while since we met. How many year has it been since you took
        my case... 5 years. Still couldn't catch me. This is your golden
        oportunity
      </Typography>
      <Link className="symbol" component="button" variant="h4" onClick={()=>setPageName("symbols")}>What is this symbol ?</Link>
      <Link className="case" component="button" variant="h4" onClick={()=>setPageName("cases")}> Cases </Link>
      <Card sx={{width:"80%"}}>
        <CardContent>
          <Typography variant="h5" align="center">My location </Typography>
          <Typography align="center">Revealed after you solve all my cases </Typography>
        </CardContent>
      </Card>

    </Stack>
  );
}
