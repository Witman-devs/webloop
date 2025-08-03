import React from "react";
import { Paper, Typography, Divider, Box, Stack } from "@mui/material";

const crumpleBackground =
  "https://www.transparenttextures.com/patterns/paper.png";

const OrganRequestMessage = ({
  requester = "Dr. X",
  organization = "Midnight Care Unit",
  contact = "+91-XXXX-XXXX",
  organ = "Liver",
  bloodType = "O+",
  urgency = "Critical",
  specialNote = "Patient prepped. Need delivery within 24 hours.",
  requestId = "REQ-9821-TRF",
  date = "August 2, 2025",
  doneDate = "03 06 2025",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
    >

      <Paper
        elevation={6}
        sx={{
          p: 3,
          maxWidth: 620,
          mx: "auto",
          mt: 4,
          fontFamily: "'Courier New', monospace",
          backgroundImage: `url(${crumpleBackground})`,
          backgroundColor: "#eebeb8ff",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          border: "1.5px solid #222",
          boxShadow: "4px 6px 15px rgba(0,0,0,0.4)",
          filter: "grayscale(0.3) contrast(1.1)",
          transform: "rotate(-0.5deg)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: 1.5,
          }}
        >
          INTERCEPTED MESSAGE
        </Typography>

        <Divider sx={{ mb: 2, borderColor: "#333" }} />

        <Stack spacing={1}>
          <Typography><strong>Request ID:</strong> {requestId}</Typography>
          <Typography><strong>Date:</strong> {date}</Typography>
          <Typography><strong>Requested By:</strong> {requester}</Typography>
          <Typography><strong>Organization:</strong> {organization}</Typography>
          <Typography><strong>Contact:</strong> {contact}</Typography>
          <Typography><strong>Organ Needed:</strong> {organ}</Typography>
          <Typography><strong>Blood Type:</strong> {bloodType}</Typography>
          <Typography><strong>Urgency:</strong> {urgency}</Typography>
          <Typography><strong>Special Note:</strong></Typography>
          <Box
            sx={{
              bgcolor: "#eaeaea",
              borderLeft: "4px solid #000",
              p: 1,
              mt: 1,
              fontStyle: "italic",
              fontSize: "0.95rem",
            }}
          >
            {specialNote}
          </Box>
        </Stack>

              {/* STAMP Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-20deg)",
          color: "#0a0",
          fontWeight: "bold",
          fontSize: "1.2rem",
          border: "2px dashed #0a0",
          px: 2,
          py: 1,
          opacity: 0.5,
          textTransform: "uppercase",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        Done.
        <br />
        Dr. Rohan Mehta
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "50%",
          right: "5%",
          transform: "translate(-50%, -50%) rotate(+5deg)",
          color: "#a00",
          fontWeight: "bold",
          fontSize: "1.2rem",
          border: "2px dashed #a00",
          px: 2,
          py: 1,
          opacity: 0.5,
          textTransform: "uppercase",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        Date
        <br />
        {doneDate}
      </Box>
      </Paper>
    </Box>
  );
};

export default OrganRequestMessage;
