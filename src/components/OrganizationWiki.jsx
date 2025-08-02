import React from "react";
import { Box, Grid, Typography, Avatar, Divider, Paper, List, Link, Stack } from "@mui/material";

export default function OrganizationWiki({
  logo,
  name,
  description,
  departments,
  keyPeople,
  history,
  contact,
  pages,
  setPageName
}) {
  return (
    <Box
      p={4}
      sx={{
        backgroundColor: "#f4f4f4",
        color: "#111",
        fontFamily: "serif",
        width: "60vw",
        marginInlineStart: "20vw",
      }}
    >
      <Grid container spacing={4} direction="column">
        {/* Sidebar */}
        <Grid item xs={12} md={12}>
          <Paper elevation={1} sx={{ p: 2, backgroundColor: "#fff" }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Avatar src={logo} sx={{ width: 120, height: 120 }} />
              <Typography variant="h5" align="center" fontWeight="bold">
                {name}
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Typography variant="body2" align="center">
                {contact?.address}
              </Typography>
              <Typography variant="body2" align="center">
                {contact?.email}
              </Typography>
              <Typography variant="body2" align="center">
                {contact?.phone}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={12}>
          <Paper elevation={1} sx={{ p: 3, backgroundColor: "#fff" }}>
            <Typography variant="h4" gutterBottom>
              {name} Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
              Departments
            </Typography>
            <ul>
              {departments.map((dept, i) => (
                <li key={i}>
                  <Typography variant="body1">{dept}</Typography>
                </li>
              ))}
            </ul>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
              Key People
            </Typography>
            <ul>
              {keyPeople.map((person, i) => (
                <li key={i}>
                  <Typography variant="body1">
                    <b>{person.name}</b> – {person.role}
                  </Typography>
                </li>
              ))}
            </ul>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
              History
            </Typography>
            <Typography variant="body1">{history}</Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h5" gutterBottom>
              Pages
            </Typography>
            <Typography variant="body1">
              <Stack>
                {
                  pages.map((ele, index)=>(
                    <>
                    <Typography variant="body1" display="inline">
                      {ele["label"]} : {" "}
                    <Link id={index} onClick={()=>setPageName(ele["pageName"])}>
                      {ele["label"]}
                    </Link>
                    </Typography>
                    </>
                  ))
                }
              </Stack>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
