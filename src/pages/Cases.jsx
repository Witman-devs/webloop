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
import { useSound } from "../hook/SoundContext";
import "../answers.css";
import detImage from "../assets/characters/det.png";
import "../App.css";

const deathCertificateNumbers = deathRecords.map((record) => record.fullName);

const Questions = {
  Case1: [
    {
      questionText: "Name of patients whose organs were trafficked.",
      answer: [
        "Roxanne Hill",
        "Dale Grady",
        "May Bayer",
        "Beverly Jakubowski",
        "Clint Barrows",
      ],
      type: "dropdown",
    },
    {
      questionText: "Name of doctor involved in trafficking",
      answer: new Set(["dr. hubert lowe", "hubert lowe"]),
    },
    {
      questionText: "Who wrote the suicide note?",
      answer: new Set(["samuel robert hayes", "samuel hayes"]),
    },
  ],
  Case2: [
    {
      questionText: "Who died to Karan's gun?",
      answer: new Set(["sandy harris"]),
    },
    {
      questionText: "License number of the gun that killed Karan",
      answer: new Set(["idkidkidk"]),
    },
    {
      questionText: "Who was the ringleader behind this specific operation?",
      answer: new Set(["molly sanford"]),
    },
  ],
  Case3: [
    {
      questionText: "Who funded the NGO?",
      answer: new Set(["idkidkidk"]),
    },
    {
      questionText: "Who receieved the organs?",
      answer: new Set(["idkidkidk"]),
    },
    {
      questionText: "What is the total transcation amount?",
      answer: new Set(["idkidkidk"]),
    },
  ],
};

function clearStorage() {
    localStorage.removeItem("q0");
    localStorage.removeItem("q1");
    localStorage.removeItem("q2");
}

function QuestionSet({ questions, setCaseSolved }) {
  const [correctResponseCount, setCorrectResponseCount] = useState(0);
  useEffect(() => {
    if (correctResponseCount === questions.length) {
      clearStorage();
      setCaseSolved(1);
    }
  }, [correctResponseCount, questions.length]);

  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          questionId = {index}
          correctAnswer={question.answer}
          questionText={question.questionText}
          type={question.type}
          setCorrectResponseCount={setCorrectResponseCount}
        />
      ))}
    </div>
  );
}

function Question({ questionId, correctAnswer, questionText, type, setCorrectResponseCount }) {
  const { playSFXMusic } = useSound();
  const [answer, setAnswer] = useState(()=>{
    let ans = localStorage.getItem("q"+questionId) || "";
    if(type === "dropdown")
      return ans === "" ? []:ans.split(",")
    return ans
  });
  const [answered, setAnswered] = useState(CheckAnswer(correctAnswer, answer));
  const [ansState, setAnsState] = useState(0);

  useEffect(() => {
    if(answered){
      setAnsState(1)
      setCorrectResponseCount((prevCount) => prevCount + 1);
    }
  }, [answered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = CheckAnswer(correctAnswer, answer);
    if(!isCorrect) {
      setAnsState(-1);
      playSFXMusic("incorrect");
      setTimeout(() => setAnsState(0), 500);
    }
    else {
      setAnsState(1);
      setCorrectResponseCount((prevCount) => prevCount + 1);
      playSFXMusic("correct");
    }
    setAnswered(isCorrect);
  };
  
  useEffect(()=>{
    localStorage.setItem("q"+questionId, answer);
  }, [answer])

  // TODO: add a animation for incorrect answer
  return (
    <div style={{ marginBlockEnd: "20px" }}>
      <Typography className="font" variant="h5">Q: {questionText}</Typography>
      {
        answered ? (
          <div style={{ display: "flex"}}>
          <Typography variant="h6" className={ansState == 1 ? "green-flash-box green-text font" : "green-text font"} display="inline" >{type === "dropdown" ? answer.join(", ") : answer}</Typography>
          </div>
        ) : (
          <form style={{ display: "flex", alignContent: "center", alignItems: "center" }} onSubmit={handleSubmit} className={ansState == -1 ? "shake red-border font": "font"}>
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

function CaseSolvedModal({ visible, onClose, message }) {
  if (!visible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={detImage} alt="Case Solved" />
        <h2 className="snackbar">{message}</h2>
      </div>
    </div>
  );
}


export default function Cases({ setPageName, sx={} }) {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(<></>);
  const [case1Solved, setCase1Solved] = useState(()=>localStorage.getItem("case1Solved") || 0);
  const [case2Solved, setCase2Solved] = useState(()=>localStorage.getItem("case2Solved") || 0);
  const [case3Solved, setCase3Solved] = useState(()=>localStorage.getItem("case3Solved") || 0);
  const [showCaseSolvedModal, setShowCaseSolvedModal] = useState(false);

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
    localStorage.setItem("case1Solved", case1Solved)
    if (case1Solved % 2 == 0) return;
    setSnackbarMessage(
      <>
          <strong>Case 1 solved!</strong><br />
          Your instincts were sharp, and your deductions even sharper.<br />
          On to the next mystery...
      </>);
      setShowCaseSolvedModal(true);

    const timer = setTimeout(() => {
      setCase1Solved(2);
      localStorage.setItem("case1Solved", 2)
      setShowCaseSolvedModal(false);
    }, 30000); 

    return () => clearTimeout(timer);
  }, [case1Solved]);

  useEffect(() => {
    localStorage.setItem("case2Solved", case2Solved)
    if (case2Solved % 2 == 0) return;
    setSnackbarMessage(
      <>
          <strong>Case 2 solved!</strong><br />
          You didn't let your emotions get to you, and you got to the bottom of your daughters death.<br />
          On to the final case...
      </>);
      setShowCaseSolvedModal(true);

    const timer = setTimeout(() => {
      setCase2Solved(2);
      localStorage.setItem("case2Solved", 2)
      setShowCaseSolvedModal(false);
    }, 30000); 

    return () => clearTimeout(timer);
  }, [case2Solved]);

  useEffect(() => {
    localStorage.setItem("case3Solved", case3Solved)
    if (case3Solved % 2 == 0) return;
    setSnackbarMessage(
      <>
          <strong>Case 3 solved!</strong><br />
          You have found the final piece to my identity.<br />
          What will you do now?
      </>);
      setShowCaseSolvedModal(true);

    const timer = setTimeout(() => {
      setCase3Solved(2);
      localStorage.setItem("case3Solved", 2)
      setShowCaseSolvedModal(false);
    }, 30000); 

    return () => clearTimeout(timer);
  }, [case3Solved]);

  return (
      <div
        style={{
          width: "60vw",
          left:"20vw",
          position: "relative",
          paddingBlockStart: "5vh",
          ...sx
        }}
      >
        <Typography variant="h2" className="font">Cases:</Typography>
        <Typography className="font" style={{ fontSize: "1.1rem", padding: "2%" }}>
          Answer all the questions to get access to my location. I am a good UX
          designer, so answers are not case sensitive. I will accept the answers
          even without middle name or prefixes.
        </Typography>
        <Link
          component="button"
          variant="h4"
          onClick={() => setPageName("case1")}
          className="font"
        >
          Case 1: Scandal at hospital
        </Link>
        <List style={{ paddingInlineStart: "10%" }}>
          {case1Solved==0?<QuestionSet questions={Questions["Case1"]} setCaseSolved={setCase1Solved} />:<>The whole hospital is fraud killing paitents and taking organs for money</>}
        </List>

        <Divider style={{ margin: "30px" }} />

        <Link
          component="button"
          variant="h4"
          onClick={() => setPageName("case2")}
          className="font"
        >
          Case 2: Shootout at port!  
        </Link>
        <List style={{ paddingInlineStart: "10%" }}>
          {case1Solved>0?case2Solved==0?<QuestionSet questions={Questions["Case2"]} setCaseSolved={setCase2Solved} />:<>They killed your daughter, how does that make you feel?</>:<></>}
        </List>
        
        <Divider style={{ margin: "30px" }} />

        <Link
          component="button"
          variant="h4"
          onClick={() => setPageName("case3")}
          className="font"
        >
          Case 3: Death of a Journalist  
        </Link>
        {case2Solved>0?case3Solved==0?<QuestionSet questions={Questions["Case3"]} setCaseSolved={setCase3Solved} />:<>You know everything needed now, what is your decision?</>:<></>}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={12000}
        onClose={() => setOpen(false)}
        message={snackbarMessage}
        action={action}
      />

      <CaseSolvedModal
        visible={showCaseSolvedModal}
        onClose={() => setShowCaseSolvedModal(false)}
        message={snackbarMessage}
      />

    </div>
  );
}
