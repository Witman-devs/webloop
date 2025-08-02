import { Divider, Input, Link, List, Typography } from "@mui/material";

function Question({ questionText }) {
  return (
    <>
      <Typography variant="h5">Q: {questionText}</Typography>
      <Input placeholder="Enter your answer here" />
    </>
  );
}

export default function Cases({ setPageName }) {
  return (
    <>
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
        <Question questionText="Death certificate number of patients whose organs were trafficked(comma seperated, in any order)." />
        <Question questionText="Name of doctor involved in trafficking" />
        <Question questionText="Who wrote the suicide note" />
      </List>
      <Divider style={{ margin: "30px" }} />

      <Link
        component="button"
        variant="h4"
        onClick={() => setPageName("case1")}
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
        onClick={() => setPageName("case1")}
      >
        Case 3: Death of a Journalist 
      </Link>
      <List style={{ paddingInlineStart: "10%" }}>
        <Question questionText="What is the total transcation amount ?" />
        <Question questionText="Who receieved the organs ?" />
        <Question questionText="Who funded the NGO ?" />
      </List>
    </>
  );
}
