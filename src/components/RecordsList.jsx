import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  Button,
  Link,
  Stack,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Document from "./Documents/Document";
import MonochromeButton from "./MonochromeButton";
import { v4 as uuidv4 } from "uuid";

const flowKey = "EvidenceBoard";

function AddToEvidence(type, data, setMessage) {
  let flow = JSON.parse(localStorage.getItem(flowKey));
  if (!flow) flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
  flow.nodes.push({
    id: data["id"],
    position: {
      x: 0,
      y: 0,
    },
    data: { documentType: type, documentData: data },
    origin: [0.5, 0.0],
    type: "document",
  });
  localStorage.setItem(flowKey, JSON.stringify(flow));
  setMessage("Added to evidence board successfully!");
  let addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
  addedDocs.push(data["id"])
  localStorage.setItem("addedDocuments", JSON.stringify(addedDocs));
}

export default function RecordsList({
  records,
  columns,
  type,
  Label,
  companyLogo,
  companyName,
  companyAddress,
  setPageName,
}) {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [message, setMessage] = useState("");
  const [addedDocuments, setAddedDocuments] = useState(() => {
    const addedDocuments = localStorage.getItem("addedDocuments");
    return addedDocuments ? JSON.parse(addedDocuments) : [];
  });
  const handleRowClick = (params) => {
    setSelectedRecord(params.row);
    const addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    if(addedDocs.includes(params.row["id"])) setMessage("This is already Added to evidence board")
    else setMessage("");
  };

  return (
    <div
      style={{
        width: "60vw",
        left: "20vw",
        position: "relative",
        paddingBlockStart: "5vh",
      }}
    >
      {/* Header */}
      <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Grid item>
          {companyLogo && (
            <Link component="image" onClick={() => setPageName("hospital")}>
              <Avatar
                src={companyLogo}
                alt="Company Logo"
                variant="square"
                sx={{ width: 80, height: 80 }}
              />
            </Link>
          )}
        </Grid>
        <Grid item xs>
          <Typography variant="h5" fontWeight="bold">
            {companyName || "Company Name"}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {companyAddress || "Company Address"}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ backgroundColor: "#fff", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {Label}
        </Typography>
        <DataGrid
          rows={records}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7, 14, 21]}
          onRowClick={handleRowClick}
        />
      </Box>

      {/* Modal for record */}
      <Modal open={!!selectedRecord} onClose={() => setSelectedRecord(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fefefe",
            boxShadow: 24,
            p: 4,
            width: "60vw",
            borderRadius: 2,
          }}
        >
          {selectedRecord && (
            <Card elevation={0}>
              <Document
                data={convertValuesToStrings(selectedRecord)}
                type={type}
              />
            </Card>
          )}
          <Stack direction="row" spacing={2}>
            {message?
            (<Typography variant="h5" color="text.secondary">
              {message}
            </Typography>
            ):(
            <MonochromeButton
              onClick={() =>
                AddToEvidence(
                  type,
                  convertValuesToStrings(selectedRecord),
                  setMessage
                )
              }
            >
              Add to evidence board
            </MonochromeButton>
            )}

          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

function convertValuesToStrings(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, String(value)])
  );
}
