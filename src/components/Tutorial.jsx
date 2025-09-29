import React, { useState } from 'react';
import Joyride from 'react-joyride';

const Tutorial = ({ runTour, stepIndex, callback }) => {
  const steps = [
    {
      target: '[data-tour="symbol"]',
      content: 'Not all symbols are just icons... some are gateways. Click it when you are ready and watch what unfolds',
      disableBeacon: true,
    },
    {
      target: '[data-tour="case"]',
      content: 'Every loop starts with a story. Follow the path...it may lead you to where you started or pull you deeper ',
      disableBeacon: true,

    },
    {
      target: '[data-tour="home"]',
      content: 'Your safe heaven! Start and the destination. You are always welcome back home',
      disableBeacon: true,
    },
    {
      target: '[data-tour="menu"]',
      content: 'This is your Evidence Board where view clues gather, your journey history unfolds, and items reveal their secrets. Explore carefully cuz every corner holds a meaning!',
      disableBeacon: true,
    },
    {
      target: '[data-tour="back"]',
      content: 'Some paths must be walked back again to find what was missed.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="search"]',
      content: 'The echoes of your past steps still whisper… search and listen.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="visited"]',
      content: 'Memories leave footprints. Trace them carefully.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="cases"]',
      content: 'The truth is hidden in plain sight. The questions wait silently.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="music"]',
      content: 'Let sound shape your journey..here, every note carries a feeling.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="settings"]',
      content: 'Control the chaos one decibel at a time.',
      disableBeacon: true,
    },
    {
      target: '[data-tour="help"]',
      content: 'If you forget what I said. Or in case you skipped me. Here is a shorter version of me',
      disableBeacon: true,
    }
  ];

  return (
    <Joyride
      steps={steps}
      run={runTour}
      stepIndex={stepIndex}
      continuous
      scrollToFirstStep
      showProgress
      showSkipButton
      disableScrollParentFix = {true}
      locale={{
        back: 'Previous',      
        close: 'Close',        
        last: 'Finish',        
        next: 'Continue',      
        skip: 'Skip',          
      }}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: '#433e3cff', 
          textColor: '#010101ff',    
          arrowColor: '#433e3cff',   
        },
        buttonNext: {
          backgroundColor: '#433e3cff', 
          color: '#fff',
        },
        buttonBack: {
          color: '#666', 
        },
        buttonClose: {
          color: '#aaa',
        },
      }}
      callback={callback}
    />
  );
};

export default Tutorial;
