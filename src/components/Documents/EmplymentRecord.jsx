import {
  Box,
  Grid,
  Paper,
  Typography,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { ADDRESS, LOGOS } from "../../consts";

const Field = ({ label, value }) => (
  <Grid item xs={12} sm={6}>
    <Typography sx={{ fontWeight: "bold" }}>{label}:</Typography>
    <Typography sx={{ ml: 1 }}>{value || "—"}</Typography>
  </Grid>
);

const mappings = {
  "Redmarsh Postal Services": "port",
  "Redmarsh Healthcare": "hospital",
  "Kingsborough College of Optometry": "",
  "St. Healmore Medical College": "college",
  "Atlas News Agency": "news",
  "Redmarsh Police Department": "police",
  "Redmarsh Chemicals": "ChemicalCompany",
  "Generico": "company",

}

function getCompanyLogo(companyName) {
  console.log("companyName", companyName);
  console.log("image", LOGOS[mappings[companyName]])
  return LOGOS[mappings[companyName]] || "";
}

function getCompanyAddress(companyName) {
  return ADDRESS[mappings[companyName]] || "";
}

export default function EmploymentRecord({
  fullName,
  dob,
  contact,
  email,
  address,
  qualification,
  university,
  yearOfPassing,
  specialRequest,
  needStaffQuarter,
  company,
}){
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 900,
        margin: "40px auto",
        padding: 4,
        backgroundColor: "#fdfdfd",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      {/* Header with Logo and Address */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        sx={{ borderBottom: "2px solid #ccc", pb: 2 }}
      >
        {company && (
          <Box
            component="img"
            src={getCompanyLogo(company)}
            alt="Company Logo"
            sx={{ width: 100, height: "auto", objectFit: "contain" }}
          />
        )}
        <Box textAlign="right">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {company || "Company Name"}
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            {getCompanyAddress(company) || "Company Address\nCity, Country"}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: "bold" }}>
        Employment Record Sheet
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Field label="Full Name" value={fullName} />
        <Field label="Date of Birth" value={dob} />
        <Field label="Contact Number" value={contact} />
        <Field label="Email Address" value={email} />
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: "bold" }}>Residential Address:</Typography>
          <Typography sx={{ ml: 1 }}>{address || "—"}</Typography>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        Educational Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Field label="Qualification" value={qualification} />
        <Field label="University / Institution" value={university} />
        <Field label="Year of Passing" value={yearOfPassing} />
      </Grid>

      <Typography variant="h6" gutterBottom>
        Special Requests
      </Typography>
      <Typography sx={{ ml: 1, mb: 2 }}>
        {specialRequest || "None"}
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={!!needStaffQuarter} disabled />}
        label="Require Staff Quarter accommodation"
      />
    </Paper>
  );
};
