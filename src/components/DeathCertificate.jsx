import { Box, Typography, Divider } from "@mui/material";

export default function DeathCertificate({
  fullName = "John Doe",
  dateOfBirth = "January 1, 1950",
  dateOfDeath = "July 25, 2025",
  placeOfDeath = "Mumbai, India",
  causeOfDeath = "Natural Causes",
  doctor = "Dr. Heck Smith",
  examiner = "Dr. Director",
  certificateNumber = "DC-2025-456789",
  registrar = "Registrar of Vital Statistics",
}) {
  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "40px auto",
        padding: 4,
        border: "1px solid #555",
        backgroundColor: "#fdfcf9",
        boxShadow: "2px 4px 12px rgba(0,0,0,0.2)",
        fontFamily: "'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        Death Certificate
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        This is to certify that:
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {fullName}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        was born on <strong>{dateOfBirth}</strong> and passed away on{" "}
        <strong>{dateOfDeath}</strong>.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1 }}>
        Place of Death: <strong>{placeOfDeath}</strong>
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Cause of Death: <strong>{causeOfDeath}</strong>
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2 }}>
        Doctor: <strong>{doctor}</strong>
      </Typography>


      <Typography variant="body1" sx={{ mb: 2 }}>
        Examiner: <strong>{examiner}</strong>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" sx={{ mb: 1 }}>
        Certificate No: <strong>{certificateNumber}</strong>
      </Typography>

      <Typography variant="body2" sx={{ mb: 4 }}>
        Issued by: <strong>{registrar}</strong>
      </Typography>

      <Typography variant="caption" color="text.secondary">
        This document is a certified copy issued under the Registration of
        Births and Deaths Act, 1969.
      </Typography>
    </Box>
  );
}
