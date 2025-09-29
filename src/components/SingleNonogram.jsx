import { grey } from "@mui/material/colors";
import { Background } from "@xyflow/react";
import { useRef, useEffect, useState } from "react";

const PUZZLE_ROW_HINTS = [[2], [3], [2], [3], [3], [3], [3], [1], [2]];

const PUZZLE_COL_HINTS = [[0], [0], [9], [7, 1], [1, 4]];

function SingleNonogram() {
  const canvasRef = useRef(null);
  const [hint, setHint] = useState(0);

  useEffect(() => {
    const Nonogram = window.nonogram;
    const targetElement = canvasRef.current;
    if (Nonogram && targetElement) {
      try {
        new Nonogram.Game(PUZZLE_ROW_HINTS, PUZZLE_COL_HINTS, targetElement, {
          theme: {
            width: 450, // Adjust size as needed
            isMeshed: true,
            filledColor: "#333", // Darker color for penguin body
          },
        });
      } catch (error) {
        console.error("Nonogram initialization failed:", error);
      }
    }
  }, []);

  return (
    <div
      style={{
        left: "20vw",
        top: "5vh",
        textAlign: "center",
        height: "90vh",
        maxWidth: "90vw",
        zIndex: 10000,
        position: "absolute",
        background: "#53a2d7",
        overflow: "clip",
        padding: "0 20px",
      }}
    >
      <h1>
        Guess the Sea creature in this nonogram! That is the password to my
        laptop{" "}
      </h1>
      <h3>
        Hint:{" "}
        <span style={{background:hint?"transparent":grey[500]}} onClick={()=>setHint(1)}>
          <span
            style={{
              opacity: hint ? 100 : 0,
            }}
          >
            It leaves under the sea but there is another animal with similar name
            on land.
          </span>
        </span>
      </h3>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default SingleNonogram;
