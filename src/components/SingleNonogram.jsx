import React from "react";
import { Tooltip } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Background } from "@xyflow/react";
import { useRef, useEffect, useState } from "react";

const PUZZLE_ROW_HINTS = [[2], [4], [6], [2], [3], [4], [3],[2], [1,1], [3]];

const PUZZLE_COL_HINTS = [[1],[1], [2,2,2], [7,1], [10],[2,3]];

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

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

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
        <Tooltip
          title="Click to reveal the hint"
          slotProps={{
            popper: {
              popperRef,
              anchorEl: {
                getBoundingClientRect: () => {
                  return new DOMRect(
                    positionRef.current.x,
                    areaRef.current.getBoundingClientRect().y + 20,
                    0,
                    0
                  );
                },
              },
            },
          }}
          onClick={() => setHint(1)}
        >
          <span
            style={{ background: hint ? "transparent" : grey[500] }}
            ref={areaRef}
            onMouseMove={handleMouseMove}
          >
            <span
              style={{
                opacity: hint ? 100 : 0,
              }}
            >
              It leaves under the sea but there is another animal with similar
              name on land.
            </span>
          </span>
        </Tooltip>
      </h3>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default SingleNonogram;
