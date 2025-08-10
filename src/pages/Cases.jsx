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
import React, { use, useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import deathRecords from "../assets/death_records.json";
import MonochromeButton from "../components/MonochromeButton";


const deathCertificateNumbers = deathRecords.map((record) => record.fullName);

const Questions = {
  Case1: [
    {
      questionText: "Name of patients whose organs were trafficked.",
      answer: [
        "Roxanne Hintz",
        "Dale Grady",
        "May Bayer",
        "Beverly Jakubowski",
        "Clint Barrows",
      ],
      type: "dropdown",
    },
    {
      questionText: "Name of doctor involved in trafficking",
      answer: new Set(["dr. rohan mehta", "rohan mehta"]),
    },
    {
      questionText: "Who wrote the organ trafficking report?",
      answer: new Set(["samuel robert hayes", "samuel hayes"]),
    },
  ],
};

function QuestionSet({ questions, setCaseSolved }) {
  const [correctResponseCount, setCorrectResponseCount] = useState(0);
  useEffect(() => {
    if (correctResponseCount === questions.length) {
      // TODO: add a animation for case solved
      setCaseSolved((prev) => prev + 1);
    }
  }, [correctResponseCount, questions.length]);
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          correctAnswer={question.answer}
          questionText={question.questionText}
          type={question.type}
          setCorrectResponseCount={setCorrectResponseCount}
        />
      ))}
    </div>
  );
}

function Question({ correctAnswer, questionText, type, setCorrectResponseCount }) {
  const [answer, setAnswer] = useState(type === "dropdown" ? [] : "");
  const [answered, setAnswered] = useState(false);
  const handleSubmit = () => {
    const isCorrect = CheckAnswer(correctAnswer, answer);
    setAnswered(isCorrect);
    if (isCorrect) setCorrectResponseCount((prevCount) => prevCount + 1);
  };
// TODO: add a animation for incorrect answer
  return (
    <div style={{ marginBlockEnd: "20px" }}>
      <Typography variant="h5">Q: {questionText}</Typography>
      {
        answered ? (
          <Typography variant="h6" color="green" display="inline" >{type === "dropdown" ? answer.join(", ") : answer}</Typography>
        ) : (
          <form style={{ display: "flex", alignContent: "center", alignItems: "center" }} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <InputField
            answer={answer}
            setAnswer={setAnswer}
            type={type}
            style={{ flex:1, maxWidth: "70%" }}
          />
          <X color="red" style={{ display: answered ? "none" : "inline", marginInlineStart: "10px" }} />
          <MonochromeButton style={{ marginInlineStart: "10px" }} onClick={handleSubmit}> Check Answer</MonochromeButton>
          </form>
        )
      }
    </div>
  );
}

function InputField({ answer, setAnswer, type, style }) {
  return (
    <>
      {type === "dropdown" ? (
        <Autocomplete
          multiple
          style={{ display: "inline", ...style }}
          options={deathCertificateNumbers}
          getOptionLabel={(option) => option}
          value={answer}
          onChange={(event, newValue) => {
            setAnswer(newValue);
          }}
          sx={style}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Dead People's Names"
              fullWidth={false}
              style={{ width: "100%" }}
            />
          )}
        />
      ) : (
        <Input
          style={style}
          placeholder="Enter your answer here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}
    </>
  );
}

function CheckAnswer(correctAnswer, userAnswer) {
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.every((item) => userAnswer.includes(item));
  } else {
    return correctAnswer.has(userAnswer.toLowerCase());
  }
}

export default function Cases({ setPageName }) {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [caseSolved, setCaseSolved] = useState(0);

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

  useEffect(() => {
    if (caseSolved == 0) return;
    setSnackbarMessage(`Case ${caseSolved} solved!`);
    setOpen(true);
  }, [caseSolved]);

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
        Answer all the questions to get access to my location. I am a good UX
        designer, so answers are not case sensitive. I will accept the answers
        even without middle name or prefixes.
      </Typography>
      <Link
        component="button"
        variant="h4"
        onClick={() => setPageName("case1")}
      >
        Case 1: Scandal at hospital
      </Link>
      <List style={{ paddingInlineStart: "10%" }}>
        <QuestionSet questions={Questions["Case1"]} setCaseSolved={setCaseSolved} />
      </List>

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
        autoHideDuration={12000}
        onClose={() => setOpen(false)}
        message={snackbarMessage}
        action={action}
      />
    </div>
  );
}
