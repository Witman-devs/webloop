import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  TextField,
} from "@mui/material";

const NewsCutout = ({ article }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        border: "1.5px dashed #222",
        borderRadius: "4px",
        backgroundColor: "#f9f7f1",
        fontFamily: "'Times New Roman', serif",
        color: "#111",
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
        boxShadow: "4px 4px 0px #ccc",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        {article.title}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontStyle: "italic", mb: 1 }}>
        {article.author} | {article.date} | {article.category}
      </Typography>
      <Divider sx={{ borderColor: "#333", mb: 1 }} />
      <Typography variant="body1">{article.summary}</Typography>
    </Paper>
  );
};

const CompanyNewsCutoutList = ({ articles = [] }) => {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter((a) =>
    `${a.title} ${a.author} ${a.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <Box
      sx={{
        px: 4,
        py: 5,
        backgroundColor: "#eee",
        fontFamily: "'Times New Roman', serif",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          borderBottom: "4px double #222",
          pb: 2,
          mb: 4,
        }}
      >
        Company News Archives
      </Typography>

      <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
        <TextField
          label="Search articles..."
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: 400,
            "& .MuiInputBase-input": {
              fontFamily: "'Times New Roman', serif",
            },
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <Grid item xs={12} md={6} key={index}>
              <NewsCutout article={article} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 4, width: "100%", textAlign: "center" }}>
            No articles found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default CompanyNewsCutoutList;
