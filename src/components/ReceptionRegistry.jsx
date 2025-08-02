import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const VisitorRegistry = ({
  companyName,
  companyAddress,
  companyLogo,
  records = [],
}) => {
const columns = [
  { field: "time", headerName: "Time", width: 100 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "purpose", headerName: "Purpose", flex: 1 },
  { field: "contact", headerName: "Contact", width: 150 },
  { field: "comment", headerName: "Comment", flex: 1 },
  { field: "signature", headerName: "Signature", width: 150 },
];

  const rows = records.map((row, index) => ({ id: index + 1, ...row }));

  return (
    <Box sx={{ p: 4, backgroundColor: "#f3f2ef" }}>
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
        sx={{ mb: 2, fontWeight: "bold", fontFamily: "'Times New Roman', serif" }}
      >
        Visitor Check-In/Out Registry
      </Typography>

      {/* Data Grid */}
      <Box sx={{ height: 500, backgroundColor: "#fff", border: "1px solid #ccc" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7, 14, 21]}
        />
      </Box>
    </Box>
  );
};

export default VisitorRegistry;
