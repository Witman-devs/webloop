import React, { memo,  useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { yellow } from "@mui/material/colors";
import {
  Card,
  CardContent,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

const DEFAULT_HANDLE_STYLE = {
  width: 50,
  height: 50,
  bottom: -5,
};

const NewsCutout = ({ article }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        border: "1.5px dashed #222",
        borderRadius: "4px",
        backgroundColor: "#f9f7f1",
        fontFamily: "'Times New Roman', serif",
        color: "#111",
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
        boxShadow: "4px 4px 0px #ccc",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {article.title}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontStyle: "italic", mb: 1 }}>
        {article.author} | {article.date} | {article.category}
      </Typography>
      <Divider sx={{ borderColor: "#333", mb: 1 }} />
      <Typography variant="body1">{article.summary}</Typography>
    </Paper>
  );
};

// TODO: make document data selectable
export default memo(({ data, isConnectable = false }) => {
  return (
    <>
      <Card
        style={{width:"20vw"}}
      >
        <CardContent>
            <NewsCutout article={data} />
        </CardContent>
        <Handle
          type="source"
          id="red"
          position={Position.top}
          style={{ ...DEFAULT_HANDLE_STYLE, left: "50%", background: "red" }}
        />
        <Handle
          type="target"
          id="red"
          position={Position.top}
          style={{ ...DEFAULT_HANDLE_STYLE, left: "50%", background: "red" }}
        />
      </Card>
    </>
  );
});
