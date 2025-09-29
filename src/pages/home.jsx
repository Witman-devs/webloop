import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Card,
  CardContent,
  Input,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AntagonistLogo from "../components/AntagonistLogo";
import "../App.css";
import Port from "./port/Port";
import birthRecords from "../assets/birth_records.json";
import MonochromeButton from "../components/MonochromeButton";
import { useNavigate } from "react-router";

const peopleName = birthRecords.map((record) => record.childName);

function Reveal() {
  const [answer, setAnswer] = useState([]);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate() 
  useEffect(() => {
    console.log(answer);
    console.log(answered)
    setAnswered(answer == ["Roger Hintz"]);
  }, [answer]);

  return (
    <div style={{ paddingInline: "20%", paddingTop: "5vh" }}>
      {answered ? (
        <>
        </>
      ) : (
        <>
          <Typography variant="h6" >
            It’s tragic that this is the way we meet. Rose had invited me to lunch at your place on Saturday — she was so excited to finally introduce me as her boyfriend. It’s unsettling how life twists and turns; one moment I had a quiet, peaceful life, and now… now this! I was at the hospital when my Rose passed away, and I still can’t believe it.
            <br/><br/>
            You already have every clue you need to find me. If you think something’s missing, go back, read everything I’ve written, listen to what I’ve said. I know you can reach me.
          </Typography>
          <Autocomplete
            style={{ display: "inline", flex: 1, maxWidth: "70%" }}
            options={peopleName}
            value={answer}
            onChange={(event, newValue) => {
              setAnswer(newValue);
            }}
            sx={{ flex: 1, maxWidth: "70%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Single value"
                placeholder="Serial killer's name"
                fullWidth={false}
                style={{ width: "100%" }}
              />
            )}
          /> 
        </>
      )}

      {answered && (
        <>
        
        <Typography variant="h5">
          Very well, Detective. Now you know everything I have to tell you. <br/>
          I ... I asked you to solve it cause I know you are the only person who should be given this autority to decide.<br/>
          I loved her from the bottom of my heart. I never thought we would be separated like that. It is unbelievable this happened.<br/>
          There was so much I wanted to tell her... Now she is not with us. I was furious, I was blinded by revenge.<br/> 
          I was so blinded I didn't even think before killing anyone! But James, James was different. I have worked with him.<br/>
          I couldn’t accept that fact that he was involved, I just wanted to ask him. But he fired me. In rage and confusion I killed him..<br/>
          His daughter was standing right there. She also lost someone she loved. I still hear her voice. It haunts me. <br/>
          Later I found out he was not aware of anything. Then...<br/>
          Whatever I did, was it right ? Was this the punishment for his ignorance? <br/>
          Or Is it the punishment for my incompetence ?<br/>
          I leave the decision upto you!

          If you decide to reveal my location to the police. I will surrender.<br/> 
          But if you decide not to hand me over, and think what I did was right, I promise you I will hunt down every individual responsible for the death of Roxanne (Rose).  

        </Typography>
        <br/>
        <MonochromeButton onClick={()=>{localStorage.setItem("end", 1); navigate("/end")}}>Hand over to police, let the goverment decide what should be done </MonochromeButton>
        <br/>
        OR
        <br/>
        <MonochromeButton onClick={()=>{localStorage.setItem("end", 2);navigate("/end")}}>Turn blind eye and accept you couldn't solve the case </MonochromeButton>
        
        </>

      )}
    </div>
  );
}

export default function Home({ setPageName }) {
  const [reveal, setReveal] = useState(
    () => localStorage.getItem("case3Solved") || 0
  );
  console.log("reve", reveal)
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
      <Typography className="ransom-note" variant="h2">
        Hello Detective
      </Typography>
      <Typography
        sx={{ fontSize: "1.2rem" }}
        className="font"
        width="80%"
        align="center"
      >
        Its been a 3 months Detective David Hill since you went into
        hibernation. You know it is disrespectful to ignore me like this. My...
        my... I wonder if you would be able to save the lives of people on my
        hitlist.
      </Typography>
      <Link
        data-tour="symbol"
        className="font"
        component="button"
        variant="h4"
        onClick={() => setPageName("symbols")}
      >
        What is this symbol ?
      </Link>
      <Link
        data-tour="case"
        className="font"
        component="button"
        variant="h4"
        onClick={() => setPageName("cases")}
      >
        {" "}
        Cases{" "}
      </Link>
      <Card sx={{ width: "80%" }}>
        <CardContent>
          <Typography variant="h5" align="center">
            My Identity
          </Typography>
          {reveal != "2" ? (
            <Typography align="center">
              Revealed after you solve all cases
            </Typography>
          ) : (
            <Reveal />
          )
          }
        </CardContent>
      </Card>
    </Stack>
  );
}
