import { Card, CardContent, Typography, Box } from "@mui/material";
import newspaperImage from '../assets/extras/newspaper.png';
import "../App.css";

export default function NewsPaperCutout({ headline, date, author="",content, rotation=-0.4, left='0' }){

  return (
    <Box
      sx={{
        backgroundColor: "#f6f1e7", // old paper look
        padding: 3,
        border: "1.5px dashed #a5936d",
        boxShadow: "4px 6px 10px rgba(0,0,0,0.15)",
        fontFamily: "'Times New Roman', Times, serif",
        maxWidth: 650,
        left: left,
        margin: `32px`,
        transform: `rotate(${rotation}deg)`,
        position: "relative",
        color: "#3e3a36",
        backgroundImage: `
          linear-gradient(to bottom, transparent 95%, rgba(0,0,0,0.05) 100%),
          repeating-linear-gradient(45deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 1px, transparent 1px, transparent 5px),
          url(${newspaperImage})
        `,
         backgroundSize: "100% 4px, 6px 6px, cover",
      }}
      className="article"
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 1,
          textTransform: "uppercase",
          fontFamily: "'Georgia', serif",
          color: "#2e2a26",
        }}
      >
        {headline}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          mb: 2,
          fontStyle: "italic",
          color: "#2b2316ff",
        }}
      >
        {date} - {author}
      </Typography>

      <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <CardContent sx={{ padding: 0 }}>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.3,
              fontSize: "1.2rem",
              fontFamily: "'Playfair Display', serif",
              whiteSpace: "pre-line",

            }}
          >
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
