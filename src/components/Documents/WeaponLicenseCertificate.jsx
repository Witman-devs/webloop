import React from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";

const WeaponLicenseCertificate = ({ data }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 4,
        backgroundColor: "#fdfcf8",
        border: "2px solid black",
        fontFamily: "'Times New Roman', serif",
        color: "#000",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
          Government of {data.issuingAuthority || "Terran Republic"}
        </Typography>
        <Typography variant="h6">Department of Arms Licensing</Typography>
        <Divider sx={{ my: 2, borderColor: "#000" }} />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Weapon License Certificate
        </Typography>
      </Box>

      {/* License Info */}
      <Box display="grid" gridTemplateColumns="1fr 2fr" rowGap={2} columnGap={3}>
        <Typography variant="subtitle1" fontWeight="bold">License No:</Typography>
        <Typography>{data.licenseNumber}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Full Name:</Typography>
        <Typography>{data.name}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Date of Birth:</Typography>
        <Typography>{data.dob}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Address:</Typography>
        <Typography whiteSpace="pre-line">{data.address}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Weapon Type:</Typography>
        <Typography>{data.weaponType}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Model/Serial No:</Typography>
        <Typography>{data.serialNumber}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Valid From:</Typography>
        <Typography>{data.issueDate}</Typography>

        <Typography variant="subtitle1" fontWeight="bold">Expires On:</Typography>
        <Typography>{data.expiryDate}</Typography>
      </Box>

      {/* Footer */}
      <Box mt={4}>
        <Typography variant="body2" fontStyle="italic">
          This license certifies that the above individual has been granted permission to carry and operate the specified weapon(s) under the laws of the issuing authority. Unauthorized duplication or tampering is punishable under law.
        </Typography>

        <Box mt={3} display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">Issued By</Typography>
            <Typography>{data.issuedBy}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">Official Seal</Typography>
            <Box
              sx={{
                width: 80,
                height: 80,
                border: "1px dashed black",
                textAlign: "center",
                lineHeight: "80px",
                fontSize: 12,
              }}
            >
              [Seal]
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default WeaponLicenseCertificate;
