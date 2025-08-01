import React, { memo,  useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { yellow } from "@mui/material/colors";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { Check, Edit2, Trash2 } from "lucide-react";

const DEFAULT_HANDLE_STYLE = {
  width: 50,
  height: 50,
  bottom: -5,
};

export default memo(({ data, isConnectable = false }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [note, setNote] = useState(data["label"]);

  return (
    <>
      <Card
        style={{
          padding: 25,
          backgroundColor: yellow[500],
          width: "250px",
          minHeight: "250px",
        }}
        onDoubleClick={() => setIsEditable(true)}
      >
        <CardHeader
          action={
            isEditable ? (
              <Check onClick={() => setIsEditable(false)} />
            ) : (
              <Edit2 onClick={() => setIsEditable(true)} />
            )
          }
        />
        <CardContent>
          <Typography variant="h4">
            {isEditable ? (
              <TextField
                fullWidth={true}
                multiline
                value={data["label"]}
                onChange={(e) => {
                  setNote(e.target.value);
                  data["label"] = e.target.value;
                }}
                variant="standard"
                inputProps={{ style: { fontSize: 27 } }}
              />
            ) : (
              note
            )}
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
