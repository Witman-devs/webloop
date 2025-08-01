import { Card, CardContent, Link, Stack, Typography } from "@mui/material";
import AntagonistLogo from "../components/AntagonistLogo";

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
      <AntagonistLogo size="200px" />
      <Typography variant="h2">Hello Detective</Typography>
      <Typography width="80%" align="center">
        Its been a while since we met. How many year has it been since you took
        my case... 5 years. Still couldn't catch me. This is your golden
        oportunity
      </Typography>
      <Link component="button" variant="h4" onClick={()=>setPageName("symbols")}>What is this symbol ?</Link>
      <Link component="button" variant="h4" onClick={()=>setPageName("cases")}> Cases </Link>
      <Card sx={{width:"80%"}}>
        <CardContent>
          <Typography variant="h5" align="center">My location </Typography>
          <Typography align="center">Revealed after you solve all my cases </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
