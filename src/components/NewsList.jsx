import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  TextField,
  Link,
} from "@mui/material";
import CompanyLogo from "./CompanyLogo";
import MonochromeButton from "./MonochromeButton";

const flowKey = "EvidenceBoard";

function AddToEvidence(type, data, setMessage) {
  let flow = JSON.parse(localStorage.getItem(flowKey));
  if (!flow) flow = { nodes: [], edges: [], viewport: { x: 0, y: 0, zoom: 1 } };
  flow.nodes.push({
    id: data["title"],
    position: {
      x: Math.random() * 150,
      y: Math.random() * 150,
    },
    data: data ,
    origin: [0.5, 0.0],
    type: type,
  });
  localStorage.setItem(flowKey, JSON.stringify(flow));
  setMessage("Added to evidence board successfully!");
  let addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
  addedDocs.push(data["title"]);
  localStorage.setItem("addedDocuments", JSON.stringify(addedDocs));
}

const NewsCutout = ({ article }) => {
  const [message, setMessage] = useState(() => {
    const addedDocs = JSON.parse(localStorage.getItem("addedDocuments")) || [];
    if (addedDocs.includes(article["title"]))
      return "This is already Added to evidence board";
    return "";
  });
  
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
      <Divider sx={{ borderColor: "#333", mb: 1 }} />
      {message ? (
        <Typography variant="h5" color="text.secondary">
          {message}
        </Typography>
      ) : (
        <MonochromeButton onClick={()=>AddToEvidence("newsCutout", article, setMessage)}>
          Add to Evidance Board
        </MonochromeButton>
      )}
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link component="span" onClick={() => setPageName("newsAgency")}>
            <CompanyLogo />
          </Link>
          <p>Company News Archives</p>
        </div>
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
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{ maxWidth: "30%", margin: "0 auto" }}
            >
              <NewsCutout article={article} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ mt: 4, width: "100%", textAlign: "center" }}
          >
            No articles found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default CompanyNewsCutoutList;
