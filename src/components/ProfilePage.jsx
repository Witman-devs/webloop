import React from "react";
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

const InfoRow = ({ label, value }) =>
  value && (
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        {label}:
      </Typography>
      <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
        {value}
      </Typography>
    </Box>
  );

export default function ProfileCard({ person, setPageName }) {
  // TODO: update with red logo
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
          {person.items &&(
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
