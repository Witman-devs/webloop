import { Box, Typography, Grid, Avatar, Divider, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function VisitorRegistry({
  companyName,
  companyAddress,
  companyLogo,
  records = [],
}) {
  const columns = [
    
    { field: "date", headerName: "Date", width: 100, valueFormatter: params=> new Date(params).toLocaleDateString() },
    { field: "time", headerName: "Time", width: 100 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "purpose", headerName: "Purpose", flex: 1 },
    { field: "comment", headerName: "Comment", flex: 1 },
    { field: "signature", headerName: "Signature", width: 150 },
  ];

  const rows = records.map((row, index) => ({ id: index + 1, ...row }));

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 1200,
        margin: "40px auto",
        padding: 4,
        backgroundColor: "#f7f7ff",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* Header */}
      <Grid container alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <Grid item>
          {companyLogo && (
            <Avatar
              src={companyLogo}
              alt="Company Logo"
              variant="square"
              sx={{ width: 80, height: 80 }}
            />
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

      {/* Title */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontFamily: "'Times New Roman', serif",
        }}
      >
        Visitor Check-In/Out Registry
      </Typography>

      {/* Data Grid */}
      <Box
        sx={{ height: 500, backgroundColor: "#fff", border: "1px solid #ccc" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7, 14, 21]}
        />
      </Box>
    </Paper>
  );
}
