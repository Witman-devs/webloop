import React, { useState , useEffect } from 'react';
import { Card, CardContent, Link, Stack, Typography } from "@mui/material";
import AntagonistLogo from "../components/AntagonistLogo";
import "../App.css";

export default function Home({setPageName}) {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntagonistLogo size="200px" setPageName={setPageName} />
      <Typography className="ransom-note" variant="h2">Hello Detective</Typography>
      <Typography sx={{fontSize: "1.2rem"}} className="font" width="80%" align="center">
        Its been a 3 months since you went into hibernation. You know it is disrespectuful to ignore me like this. 
        My... my... I wonder if you would be able to save the lives of people on my hit list.  
      </Typography>
      <Link className="symbol font" component="button" variant="h4" onClick={()=>setPageName("symbols")}>What is this symbol ?</Link>
      <Link className="case font" component="button" variant="h4" onClick={()=>setPageName("cases")}> Cases </Link>
      <Card sx={{width:"80%"}}>
        <CardContent>
          <Typography variant="h5" align="center">My Identity</Typography>
          <Typography align="center">Revealed after you solve all cases</Typography>
        </CardContent>
      </Card>

    </Stack>
  );
}
