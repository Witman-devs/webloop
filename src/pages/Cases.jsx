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
import birthRecords from "../assets/birth_records.json";
import MonochromeButton from "../components/MonochromeButton";
import { useSound } from "../hook/SoundContext";
import "../answers.css";
import detImage from "../assets/characters/det.png";
import "../App.css";

const peopleName = birthRecords.map((record) => record.childName).concat(["Sergio Schroeder", "Randolph Reynolds", "Dewey Kshlerin", "Yvonne Little", "Leroy Waelchi"]);

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
      multiple: true,
    },
    {
      questionText: "Name of doctor involved in trafficking",
      answer: ["Hubert Lowe"],
      type: "dropdown"
    },
    {
      questionText: "Who wrote the suicide note?",
      answer: ["Samuel Hayes"],
      type: "dropdown"
    },
  ],
  Case2: [
    {
      questionText: "What time did Inspector Olive Harris reach the port ?",
      answer: new Set(["9:10 AM", "9:10", "09:10", "09:10 AM"]),
    },
    {
      questionText: "What is the comission amount per container ?",
      answer: new Set(["22000"]),
    },
    {
      questionText: "Who's gun was used kill Mark Sullivan ?",
      answer: ["Sandy Harris"],
      type:"dropdown"
    },
  ],
  Case3: [
    {
      questionText: "Who receieved the organs?",
      answer: ["Sergio Schroeder", "Randolph Reynolds", "Dewey Kshlerin", "Yvonne Little", "Leroy Waelchi"],
      type: "dropdown",
      multiple:true
    },
    {
      questionText: "What is the total transcation amount?",
      answer: new Set(["9000000"]),
    },
    {
      questionText: "Who is the person behind whole organ trafficking ?",
      answer: ["Angelina Grimes"],
      type: "dropdown"
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
          multiple={question.multiple}
          setCorrectResponseCount={setCorrectResponseCount}
        />
      ))}
    </div>
  );
}

function Question({ questionId, correctAnswer, questionText, type, multiple, setCorrectResponseCount }) {
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
      playSFXMusic("correct");
    }
    setAnswered(isCorrect);
  };
  
  useEffect(()=>{
    localStorage.setItem("q"+questionId, answer);
  }, [answer])

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
            multiple={multiple?multiple:false}
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

function InputField({ answer, setAnswer, type, multiple, style }) {
  return (
    <>
      {type === "dropdown" ? (
        <Autocomplete
          multiple
          style={{ display: "inline", ...style }}
          options={peopleName}
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
              label={multiple?"Multiple values": "Single value"}
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
    <div className="modal-overlay" onClick={onClose} style={{background:"white"}}>
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
          Well done detective I knew you are the only one capable of finding me.<br />
          I wonder is that because you are good detective or you don't care about yourself in the face of curropt   
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
          display={case1Solved>0?"block":"none"}
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
          display={case2Solved>0?"block":"none"}
        >
          Case 3: Death of a Journalist  
        </Link>
        <List style={{ paddingInlineStart: "10%" }}>
          {case2Solved>0?case3Solved==0?<QuestionSet questions={Questions["Case3"]} setCaseSolved={setCase3Solved} />:<>You know everything needed now, As part of your reward you find me! My location is in the home page</>:<></>}
        </List>
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
