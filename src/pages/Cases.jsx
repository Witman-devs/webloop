import {
  Autocomplete,
  Button,
  Divider,
  IconButton,
  Input,
  Link,
  List,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MonochromeButton from "../components/MonochromeButton.jsx";
import React, { useState } from "react";
import { X } from "lucide-react";
import deathRecords from "../assets/death_records.json"; 
import outro_sound from '../assets/music/outro.mp3';

const deathCertificateNumbers = deathRecords.map((record) => record.fullName);  

function Question({ answer, setAnswer, questionText, type }) {
  return (
    <div style={{ marginBlockEnd: "20px" }}>
      <Typography variant="h5">Q: {questionText}</Typography>
      {type === "dropdown" ? (
        <Autocomplete
          multiple
          id="tags-standard"
          options={deathCertificateNumbers}
          getOptionLabel={(option) => option}
          // defaultValue={answer}
          value={answer}
          onChange={(event, newValue) => {
            console.log(newValue);
            setAnswer(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Death People's Names"
              fullWidth={false}
              style={{ width: "70%" }}
              />
          )}
        />
      ) : (
        <Input
          style={{ width: "70%" }}
          placeholder="Enter your answer here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}
    </div>
  );
}

function CheckAnswers(A1, A2, A3, openSnackbar, setSnackbarMessage) {
  // const outro_music = new Howl({
  //   src: [outro_sound],
  //   autoplay: false,
  //   loop: false,
  //   volume: getEffectiveVolume('sfx', 1), // Use the helper function to get effective volume
  //   // Preload to ensure it's ready before any fade operations
  //   preload: true
  // });
  const correctAnswers = {
    A1: ["Roxanne Hintz", "Dale Grady", "May Bayer", "Beverly Jakubowski", "Clint Barrows"], // Example death certificate numbers
    A2: new Set(["dr. rohan mehta", "rohan mehta"]), // Example doctor's name
    A3: new Set(["samuel robert hayes", "samuel hayes"]), // Example name of the person who
  };
  const userAnswers = {
    A1: A1.map((item) => item.trim()), // Split by comma and trim each item
    A2: A2.trim(),
    A3: A3.trim(),
  };

  // Check if user answers match correct answers
  for (const key in correctAnswers) {
    if (Array.isArray(correctAnswers[key])) {
      // If the correct answer is an array, check if all elements are present in user answers
      if (
        !correctAnswers[key].every((item) => userAnswers[key].includes(item))
      ) {
        openSnackbar(true);
        setSnackbarMessage(`Incorrect answer for ${key}. Please try again.`);
        return;
      }
    } else {
      if (correctAnswers[key].has(userAnswers[key].toLowerCase()) === false) {
        openSnackbar(true);
        setSnackbarMessage(`Incorrect answer for ${key}. Please try again.`);
        return;
      }
    }
  }
  openSnackbar(true);
  // outro_music.play(); // Play the outro music
  setSnackbarMessage("All answers are correct!");
}

export default function Cases({ setPageName }) {
  const [A1, setA1] = useState([]);
  const [A2, setA2] = useState("");
  const [A3, setA3] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <X fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div
      style={{
        width: "60vw",
        left: "20vw",
        position: "relative",
        paddingBlockStart: "5vh",
      }}
    >
      <Typography variant="h2">Cases:</Typography>
      <Typography>
        Answer all the questions to get access to my location.
      </Typography>
      <Link
        component="button"
        variant="h4"
        onClick={() => setPageName("case1")}
      >
        Case 1: Scandal at hospital
      </Link>
      <List style={{ paddingInlineStart: "10%" }}>
        <Question
          answer={A1}
          setAnswer={setA1}
          type="dropdown"
          questionText="Death certificate number of patients whose organs were trafficked(comma seperated, in any order)."
        />
        <Question
          answer={A2}
          setAnswer={setA2}
          questionText="Name of doctor involved in trafficking"
        />
        <Question
          answer={A3}
          setAnswer={setA3}
          questionText="Who wrote the suicide note"
        />
      </List>
      <Stack direction="row-reverse">
        <MonochromeButton
          onClick={() => CheckAnswers(A1, A2, A3, setOpen, setSnackbarMessage)}
        >
          Submit Answers
        </MonochromeButton>
      </Stack>
      <Divider style={{ margin: "30px" }} />

      {false && (
        <>
          <Link
            component="button"
            variant="h4"
            onClick={() => setPageName("case2")}
          >
            Case 2: Shootout at port
          </Link>
          <List style={{ paddingInlineStart: "10%" }}>
            <Question questionText="Whose gun did the inspector B die from ?" />
            <Question questionText="Commission amount ?" />
            <Question questionText="What time did the inspector A get to the port ?" />
          </List>
          <Divider style={{ margin: "30px" }} />

          <Link
            component="button"
            variant="h4"
            onClick={() => setPageName("case3")}
          >
            Case 3: Death of a Journalist
          </Link>
          <List style={{ paddingInlineStart: "10%" }}>
            <Question questionText="What is the total transcation amount ?" />
            <Question questionText="Who receieved the organs ?" />
            <Question questionText="Who funded the NGO ?" />
          </List>
        </>
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={snackbarMessage}
        action={action}
      />
    </div>
  );
}
