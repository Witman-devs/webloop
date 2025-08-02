import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function BirthCertificate({
  childName = "Aryan Kumar",
  dateOfBirth = "August 2, 2025",
  timeOfBirth = "04:30 AM",
  gender = "Male",
  placeOfBirth = "Bengaluru, Karnataka",
  fatherName = "Ravi Kumar",
  motherName = "Priya Kumar",
  certificateNumber = "BC-2025-123456",
  registrar = "Registrar of Births",
}){
  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 4,
        border: "1.5px solid #666",
        backgroundColor: "#fbf9f5",
        boxShadow: "4px 6px 12px rgba(0,0,0,0.15)",
        fontFamily: "'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "80px",
          color: "rgba(0,0,0,0.05)",
          textTransform: "uppercase",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        Certified Copy
      </Typography>

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}
      >
        Government of Zorik
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Birth Certificate
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        This is to certify that:
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {childName}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        was born on <strong>{dateOfBirth}</strong> at{" "}
        <strong>{timeOfBirth}</strong>.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        Gender: <strong>{gender}</strong>
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        Place of Birth: <strong>{placeOfBirth}</strong>
      </Typography>

      <Typography variant="body1" sx={{ mt: 3, mb: 1 }}>
        Father's Name: <strong>{fatherName}</strong>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Mother's Name: <strong>{motherName}</strong>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" sx={{ mb: 1 }}>
        Certificate No: <strong>{certificateNumber}</strong>
      </Typography>

      <Typography variant="body2" sx={{ mb: 4 }}>
        Issued by: <strong>{registrar}</strong>
      </Typography>

      <Typography variant="caption" color="text.secondary">
        This certificate is issued under the Registration of Births and Deaths
        Act, 1969.
      </Typography>
    </Box>
  );
};

