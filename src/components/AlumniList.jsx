import { Paper, Typography, Box, Divider, Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DoctorInfo = {
  "Dr. Juan Martinez": "doc1",
  "Dr. Hubert Lowe": "doc2",
}


export default function AlumniStudentsList({
  alumni = [],
  collegeLogo,
  collegeAddress,
  setPageName,
}) {
  
  const columns = [
    { field: "id", headerName: "#", width: 70 },
    { field: "name", headerName: "Name", flex: 1,
        renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {params.row.name in DoctorInfo ? (
            <Link onClick={() => setPageName(DoctorInfo[params.row.name])}>
              {params.row.name}
            </Link>
          ) : (
            params.row.name
          )}
        </Box>
      ),
     },
    { field: "rollNumber", headerName: "Roll No.", flex: 1 },
    { field: "degree", headerName: "Degree", flex: 0.8 },
    { field: "batch", headerName: "Batch", flex: 0.6 },
    { field: "graduationYear", headerName: "Graduated", flex: 0.6 },
    { field: "specialization", headerName: "Specialization", flex: 1 },
    { field: "currentEmployment", headerName: "Current Employment", flex: 2 },
  ];
  const rows = alumni.map((s, idx) => ({
    id: idx + 1,
    ...s,
  }));

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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{ borderBottom: "2px solid #ccc", pb: 2 }}
      >
        {collegeLogo && (
          <Link component="image" onClick={() => setPageName("college")}>
            <Box
              component="img"
              src={collegeLogo}
              alt="College Logo"
              sx={{ width: 100, height: "auto", objectFit: "contain" }}
            />
          </Link>
        )}
        <Box textAlign="right">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {collegeAddress?.name || "Doctor's Medical College"}
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {collegeAddress?.lines || "123 Med Lane\nHealth City, Country"}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Alumni Records
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Data Grid */}
      <Box sx={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 25]}
          disableRowSelectionOnClick
          sx={{
            backgroundColor: "white",
            fontFamily: "inherit",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#dee2ff",
              fontWeight: "bold",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
