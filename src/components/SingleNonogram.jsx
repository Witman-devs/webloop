import { useRef, useEffect } from 'react';

const PUZZLE_ROW_HINTS = [
  [2],       
  [3],     
  [2], 
  [5], 
  [4],  
  [3],
  [3],  
  [1],   
  [2],   
];

const PUZZLE_COL_HINTS = [
  [1],    
  [2],    
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
              isMeshed: true,
              filledColor: '#333', // Darker color for penguin body
            },
            onSuccess: () => alert('You solved the Penguin Nonogram! 🐧')
          }
        );
      } catch (error) {
        console.error("Nonogram initialization failed:", error);
      }
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My Nonogram</h1>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default SingleNonogram;