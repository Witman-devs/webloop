import React, { useState } from 'react';
import Joyride from 'react-joyride';

const Tutorial = ({ runTour, stepIndex, callback }) => {
  const steps = [
    {
      target: '.symbol',
      content: 'Not all symbols are just icons... some are gateways. Click it when you are ready and watch what unfolds',
      disableBeacon: true,
    },
    {
      target: '.case',
      content: 'Every loop starts with a story. Follow the path...it may lead you to where you started or pull you deeper ',
      disableBeacon: true,

    },
    {
      target: '.menu',
      content: 'This is your Evidence Board where view clues gather, your journey history unfolds, and items reveal their secrets. Explore carefully cuz every corner holds a meaning!',
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
