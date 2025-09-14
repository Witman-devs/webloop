import { Box, Typography, Divider } from "@mui/material";

export default function AutopsyReport({
  caseNumber = "AUT-2025-0042",
  name = "John Doe",
  age = "45",
  gender = "Male",
  dateOfDeath = "July 30, 2025",
  dateOfExamination = "August 1, 2025",
  examiner = "Dr. Meera Shah",
  location = "State Forensic Lab, Mumbai",
  causeOfDeath = "Massive internal hemorrhage due to blunt force trauma",
  findings = `- Multiple contusions and lacerations on chest and abdomen\n- Rib fractures on left side\n- Laceration of spleen and liver\n- No signs of defensive wounds\n- Toxicology report pending`,
  conclusion = "Cause of death is consistent with accidental blunt force injury sustained in a fall from height.",
}){
  return (
    <Box
      sx={{
        margin: "40px auto",
        padding: 4,
        border: "1.5px solid #444",
        backgroundColor: "#f8f8f5",
        boxShadow: "2px 4px 10px rgba(0,0,0,0.2)",
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
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "90px",
          color: "rgba(0,0,0,0.035)",
          textTransform: "uppercase",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        Autopsy Report
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", mb: 0.5, textTransform: "uppercase" }}
      >
        Department of Forensic Medicine
      </Typography>
      <Typography variant="subtitle2" align="center" sx={{ mb: 2 }}>
        {location}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Case No:</strong> {caseNumber}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Name of Deceased:</strong> {name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Age:</strong> {age}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Gender:</strong> {gender}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Date of Death:</strong> {dateOfDeath}
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        <strong>Date of Autopsy:</strong> {dateOfExamination}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        External & Internal Examination Findings:
      </Typography>
      <Typography
        variant="body1"
        sx={{ whiteSpace: "pre-line", mb: 3 }}
      >
        {findings}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Cause of Death:
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {causeOfDeath}
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Conclusion:
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {conclusion}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2">
        <strong>Examiner:</strong> {examiner}
      </Typography>
    </Box>
  );
};

