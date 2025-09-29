import React, { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { yellow } from "@mui/material/colors";
import {
  Avatar,
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

export default memo(({ data, isConnectable = false }) => {
  return (
    <>
      <Card style={{ background:"#fff", boxShadow:"0 0.2rem 1.2rem rgba(0,0,0,0.2)" }}>
        <CardContent>
          <Avatar
            variant="square"
            sx={{
              width: "100%",
              height: "auto",
              border: "1px solid #000",
              marginBottom: 2,
            }}
            src={data.src}
          />
          <Typography textAlign="center">{data.name}</Typography>
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
