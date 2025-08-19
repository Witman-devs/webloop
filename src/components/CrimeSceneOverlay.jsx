import React from 'react';
import tapeImg from '../assets/extras/tape.png';
import bloodImg from '../assets/extras/blood.png';
import '../CrimeScene.css';

const bloodPositions = [
  { top: '15%', left: '-20%' },
  { bottom: '25%', right: '-25%' },
];

const CrimeSceneOverlay = () => {
  return (
    <>
      {/* Tape */}
      <img src={tapeImg} alt="Tape" className="crime-tape tape-top-left" />
      <img src={tapeImg} alt="Tape" className="crime-tape tape-bottom-right" />

      {/* Blood splats - only two spots */}
      {bloodPositions.map((pos, i) => (
        <img
          key={i}
          src={bloodImg}
          alt="Blood splat"
          className="blood-splat"
          style={pos}
        />
      ))}
    </>
  );
};

export default CrimeSceneOverlay;
