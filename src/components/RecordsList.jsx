import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeathCertificate from "./DeathCertificate";
import BirthCertificate from "./BirthCertificate";
import AutopsyReport from "./Autopsy";
import EmploymentRecord from "./EmplymentRecord";


function Document({type, data}){
  switch (type) {
    case "death":
      return <DeathCertificate {...data} />;

    case "birth":
      return <BirthCertificate {...data} />;

    case "autopsy":
      return <AutopsyReport {...data} />;

    case "employee":
      return <EmploymentRecord {...data} />;

    default:
      return <div>Unsupported document type: {type}</div>;
  }
}


export default function RecordsList({ records, columns, type, Label, companyLogo, companyName, companyAddress }){
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleRowClick = (params) => {
    setSelectedRecord(params.row);
  };

  return (
    <>
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

      <Box sx={{ backgroundColor: "#fff", p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {Label} 
        </Typography>
        <DataGrid
          rows={records}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7, 14, 21]}
          onRowClick={handleRowClick}
        />
      </Box>

      {/* Modal for record */}
      <Modal open={!!selectedRecord} onClose={() => setSelectedRecord(null)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fefefe",
            boxShadow: 24,
            p: 4,
            width: "60vw",
            borderRadius: 2,
          }}
        >
          {selectedRecord && (
            <Card elevation={0}>
                <Document data={selectedRecord} type={type}/>
            </Card>
          )}
          {/* // TODO: Add a button that says add to evidance board */}
        </Box>
      </Modal>
    </>
  );
}