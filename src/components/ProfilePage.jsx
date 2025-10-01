import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";
import AntagonistLogo from "./AntagonistLogo";
import paper from "../assets/extras/paper.png";
import MonochromeButton from "./MonochromeButton";

const flowKey = "EvidenceBoard";

function AddToEvidence(data, setMessage) {
  let flow = JSON.parse(localStorage.getItem(flowKey));
  if (!flow) flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
  flow.nodes.push({
    id: data["name"],
    position: {
      x: Math.random() * 150,
      y: Math.random() * 150,
    },
    data: data,
    origin: [0.5, 0.0],
    type: "photo",
  });
  localStorage.setItem(flowKey, JSON.stringify(flow));
  setMessage("Added to evidence board successfully!");
  let addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
  addedDocs.push(data["name"]);
  localStorage.setItem("addedDocuments", JSON.stringify(addedDocs));
}

function InfoRow({ label, value }) {
  return (
    value && (
      <Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {label}:
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
          {value}
        </Typography>
      </Box>
    )
  );
}

export default function ProfileCard({ person, setPageName }) {
    const [message, setMessage] = useState(() => {
      const addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
      if (addedDocs.includes(person["name"]))
        return "This image is already Added to evidence board";
      return "";
    });

  return (
    <Card
      elevation={1}
      sx={{
        maxWidth: 1000,
        margin: "auto",
        background: "#f5f5f5",
        border: "1px solid #000",
        borderRadius: 2,
        fontFamily: "'Georgia', serif",
        color: "#111",
        p: 3,
      }}
    >
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Text details */}
        <Box flex={3}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            {person.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {person.fullName}
          </Typography>
          <Divider sx={{ my: 2, borderColor: "#000" }} />
          <Typography variant="h6" gutterBottom>
            Biography
          </Typography>
          <Typography variant="body1" paragraph sx={{ whiteSpace: "pre-line" }}>
            {person.bio}
          </Typography>
          {person.items && (
            <>
              <Typography variant="h6" gutterBottom>
                Items
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ whiteSpace: "pre-line" }}
              >
                {person.items}
              </Typography>
            </>
          )}
        </Box>

        {/* Image and quick info */}
        <Box
          flex={1.2}
          sx={{
            border: "1px solid #000",
            backgroundColor: "#fff",
            padding: 2,
            height: "fit-content",
          }}
        >
          <Avatar
            src={person.image}
            alt={person.name}
            variant="square"
            sx={{
              width: "100%",
              height: "auto",
              border: "1px solid #000",
              marginBottom: 2,
            }}
          />
          {message ? (
            <Typography variant="body1" color="text.secondary">
              {message}
            </Typography>
          ) : (
            <MonochromeButton onClick={() => AddToEvidence({"name":person.name, "src":person.image}, setMessage)}>
              Add photo to evidence board
            </MonochromeButton>
          )}
          <Box display="grid" gridTemplateColumns="1fr" rowGap={1}>
            <InfoRow label="Birth Date" value={person.birthDate} />
            <InfoRow label="Death Date" value={person.deathDate} />
            <InfoRow label="Occupation" value={person.occupation} />
            <InfoRow label="Affiliation" value={person.affiliation} />
            <InfoRow label="First Appearance" value={person.firstAppearance} />
            <InfoRow label="Address" value={person.address} />
          </Box>
        </Box>
      </Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntagonistLogo
          size="150px"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(10%) sepia(88%) saturate(7284%) hue-rotate(6deg) brightness(105%) contrast(114%)",
          }}
          setPageName={setPageName}
        />
      </Stack>
    </Card>
  );
}
