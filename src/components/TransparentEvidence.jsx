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
          backgroundColor: "rgba(255, 235, 59, 0)", // yellow[500] with transparency
          boxShadow: "none", // remove shadow for more transparency
        }}
        elevation={0} // remove elevation for more transparency
      >
        <CardContent>
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
          style={{ ...DEFAULT_HANDLE_STYLE, left: "50%", background: "red", top: 50 }}
        />
      </Card>
    </>
  );
});
