import { Background } from '@xyflow/react';
import { useRef, useEffect } from 'react';

const PUZZLE_ROW_HINTS = [
  [2],       
  [3],     
  [2], 
  [3], 
  [3],  
  [3],
  [3],  
  [1],   
  [2],   
];

const PUZZLE_COL_HINTS = [
  [0],    
  [0],    
  [9],    
  [7, 1], 
  [1, 4],   
];

function SingleNonogram() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const Nonogram = window.nonogram;
    const targetElement = canvasRef.current;
    if (Nonogram && targetElement) {
      try {
        new Nonogram.Game(
          PUZZLE_ROW_HINTS,
          PUZZLE_COL_HINTS,
          targetElement,
          {
            theme: {
              width: 500, // Adjust size as needed
              height: 733,
              isMeshed: true,
              filledColor: '#333', // Darker color for penguin body 
            },
          }
        );
      } catch (error) {
        console.error("Nonogram initialization failed:", error);
      }
    }
  }, []);

  return (
    <div style={{ left: '20vw', top: "5vh", textAlign: 'center', height:"90vh", maxWidth:"90vw",zIndex:10000, position:"absolute", background:"white", overflow:"clip" }}>
      <h1>Guess the Sea creature in this nonogram! That is the password to my laptop </h1>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default SingleNonogram;