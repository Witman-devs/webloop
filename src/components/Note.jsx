import React, { memo, useState } from "react";
import { Handle, NodeResizer, Position } from "@xyflow/react";
import { yellow } from "@mui/material/colors";
import {
  Card,
  CardContent,
  CardHeader,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

const DEFAULT_HANDLE_STYLE = {
  width: 50,
  height: 50,
  bottom: -5,
};

export default memo(({ data, selected }) => {
  const [note, setNote] = useState(data["label"]);

  return (
    <>
      <NodeResizer minWidth={250} minHeight={250} isVisible={selected} />
      <Card
        style={{
          backgroundColor: yellow[500],
          height: "100%",
          boxShadow: "5px 5px 7px rgba(33,33,33,.7)",
        }}
      >
        <div
          className="noteHeader"
          style={{
            cursor: "grab",
            backgroundColor: yellow[100],
            width: "100%",
            height: "50px",
          }}
        ></div>
        <CardContent
          style={{ padding: 0, marginInlineStart: 10, marginInlineEnd: 10 }}
        >
          <TextField
            fullWidth={true}
            multiline
            value={data["label"]}
            onChange={(e) => {
              setNote(e.target.value);
              data["label"] = e.target.value;
            }}
            variant="standard"
            InputProps={{ style: { fontSize: 27, height: "100%" } }}
            minRows={5}
          />
        </CardContent>
      </Card>
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
    </>
  );
});
