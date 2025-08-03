import { Button, Divider, IconButton, Input, Link, List, Snackbar, Stack, Typography } from "@mui/material";
import { amber, red, yellow } from "@mui/material/colors";
import MonochromeButton from "../components/MonochromeButton.jsx";
import React, { useState } from "react";
import { X } from "lucide-react";

function Question({ answer, setAnswer, questionText }) {
  return (
    <div style={{ marginBlockEnd: "20px" }}>
      <Typography variant="h5">Q: {questionText}</Typography>
      <Input
        placeholder="Enter your answer here"
        style={{ width: "70%" }}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}

function CheckAnswers(A1, A2, A3, openSnackbar, setSnackbarMessage) {
  const correctAnswers = {
    A1: ["DC-564389","DC-660433","DC-746791","DC-945350","DC-953484"], // Example death certificate numbers
    A2: "Dr. Rohan Mehta", // Example doctor's name
    A3: "Samuel Robert Hayes", // Example name of the person who
  };
  const userAnswers = {
    A1: A1.trim().split(",").map(item => item.trim()), // Split by comma and trim each item
    A2: A2.trim(),
    A3: A3.trim(),
  };

  // Check if user answers match correct answers
  for (const key in correctAnswers) {
    if (Array.isArray(correctAnswers[key])) {
      // If the correct answer is an array, check if all elements are present in user answers
      if (!correctAnswers[key].every(item => userAnswers[key].includes(item))) {
        openSnackbar(true);
        setSnackbarMessage(`Incorrect answer for ${key}. Please try again.`);
        return;
      }
    } else {
      if (correctAnswers[key].toLowerCase() !== userAnswers[key].toLowerCase()) {
        openSnackbar(true);
        setSnackbarMessage(`Incorrect answer for ${key}. Please try again.`);
        return;
      }
    }
  }
  openSnackbar(true);
  setSnackbarMessage("All answers are correct!");
}

export default function Cases({ setPageName }) {
  const [A1, setA1] = useState("");
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
        <MonochromeButton onClick={() => CheckAnswers(A1, A2, A3, setOpen, setSnackbarMessage)}>
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
