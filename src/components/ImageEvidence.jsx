import React, { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { yellow } from "@mui/material/colors";
import { Card, CardContent, Typography } from "@mui/material";
import Document from "./Documents/Document";

const DEFAULT_HANDLE_STYLE = {
  width: 50,
  height: 50,
  bottom: -5,
};

// TODO: make document data selectable
export default memo(({ data, isConnectable = false }) => {
  return (
    <>
      <Card
        style={{
          padding: 25,
          backgroundColor: yellow[500],
        }}
      >
        <CardContent>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{width:"70vh"}}>
            {data["label"]}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={data["image"]}
              alt="View"
              style={{ height: "100vh", width: "auto" }}
            />
          </Typography>
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
