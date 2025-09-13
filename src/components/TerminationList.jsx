import React from "react";
import { Box, Typography, Paper, Divider, Link, Snackbar, IconButton } from "@mui/material";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import { X } from "lucide-react";

function handleFlagClick(setPageName, setOpen) {
  setOpen(true);
  localStorage.setItem("flaggedStudent", "Cletus Raj Blick");
  // setTimeout(() => setPageName("director"), 30000);
}

export default function TerminatedStudentsList({
  students = [],
  collegeLogo,
  collegeAddress,
  setPageName,
}) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "#", width: 70 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {params.row.name == "Cletus Raj Blick" ? (
            <Link onClick={() => handleFlagClick(setPageName, setOpen)}>
              {params.row.name}
            </Link>
          ) : (
            params.row.name
          )}
        </Box>
      ),
    },
    { field: "rollNumber", headerName: "Roll No.", flex: 1 },
    { field: "batch", headerName: "Batch", flex: 0.6 },
    { field: "degree", headerName: "Degree", flex: 0.8 },
    { field: "reason", headerName: "Reason", flex: 2 },
    { field: "terminationDate", headerName: "Termination Date", flex: 1 },
  ];

  const action = (
    <React.Fragment>
      <Link
        size="small"
        onClick={()=>setPageName("director")}
      >
        Open Page
      </Link>
    </React.Fragment>
  );

  const rows = students.map((s, idx) => ({
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
        backgroundColor: "#fff8f8",
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
        sx={{ fontWeight: "bold", color: "#b00020", mb: 2 }}
      >
        Terminated Students Record
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* DataGrid Section */}
      <Box sx={{ height: 500, width: "100%" }}>
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
              backgroundColor: "#ffe6e6",
              fontWeight: "bold",
            },
          }}
        />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={30000}
        onClose={handleClose}
        message="Clue Found: Cletus Blick is not a doctor."
        action={action}
        sx={{color:"black", backgroundColor:"white"}}
      />
    </Paper>
  );
}
