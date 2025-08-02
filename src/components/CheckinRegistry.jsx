import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function CheckinRegistry({ entries = [], companyLogo, companyAddress }){
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 1000,
        margin: "40px auto",
        padding: 3,
        backgroundColor: "#faf9f6",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{ borderBottom: "2px solid #ccc", pb: 2 }}
      >
        {companyLogo && (
          <Box
            component="img"
            src={companyLogo}
            alt="Company Logo"
            sx={{ width: 80, height: "auto", objectFit: "contain" }}
          />
        )}
        <Box textAlign="right">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {companyAddress?.name || "Company Name"}
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {companyAddress?.lines || "Company Address\nCity, Country"}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
        Visitor Check-in Registry
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Registry Table */}
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#eaeaea" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Check-in Time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Purpose</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Signature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No entries yet.
                </TableCell>
              </TableRow>
            ) : (
              entries.map((entry, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.checkinTime}</TableCell>
                  <TableCell>{entry.purpose}</TableCell>
                  <TableCell>{entry.contact}</TableCell>
                  <TableCell>______________</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};