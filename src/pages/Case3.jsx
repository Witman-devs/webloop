import { Link, Typography } from "@mui/material";
import NewsPaperCutout from "../components/NewsPaperCutout";
import CrimeSceneOverlay from "../components/CrimeSceneOverlay";
import "../App.css";

function News1({ setPageName }) {
  return (
    <>
      <Typography variant="body1">
        A News reporter <Link component="span" onClick={()=>setPageName("victim3")}> Michael Thompson </Link> was found dead in his apartment. The whole apartment was
        ransacked and destroyed, All the valuables are gone and lockers are empty.
        Officials say this could be a burglary turned into a tragic murder. While
        police is investigating. The news agency <Link component="span" onClick={()=>setPageName("newsAgency")}> Atlas News Agency </Link> mourns the death of an excellent
        employee.
      </Typography>
    </>
  );
}

function News2({ setPageName }) {
  return (
    <>
      <Typography variant="body1">
        <Link component="span" onClick={()=>setPageName("company")}>Generico</Link> company CEO <Link component="span" onClick={()=>setPageName("ceo")}> James Anderson </Link> found dead in his apartment. All the family members were put to sleep with some sleeping gas. His daughter Emma closes escapes the murderer. All the valuable is intact, police is investigating the incident. Police found the Oroborus symbol in his apartment. This could be the serial killer's 3rd target. 
      </Typography>
    </>
  );
}


export default function Case3({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <CrimeSceneOverlay />
      <Typography className="font" variant="h2">Death of a Journalist </Typography>
      <NewsPaperCutout
        headline="Reporter has been found dead in his apartment"
        date="February 6th, 2005"
        author="News Desk"
        content={<News1 setPageName={setPageName} />}
        rotation="-5"
        left="2px"
      />
      <NewsPaperCutout
        headline="Generico CEO Murdered in his own apartment"
        date=" July 11th, 2005"
        author="News Desk"
        content={<News2 setPageName={setPageName} />}
        rotation="6"
        left="20vw"
      />
    </div>
  );
}
