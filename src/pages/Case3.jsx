import { Link, Typography } from "@mui/material";
import NewspaperCutout from "../components/NewsPaperCutout";

function News1({ setPageName }) {
  return (
    <>
      <Typography variant="body1">
        <b>Redmarsh, April 20th</b> — Acclaimed investigative reporter Micheal Thompson was found dead in his apartment late last night, just days after breaking a story on a suspicious art acquisition involving city officials and the Redmarsh NGO.
      </Typography>
      <Typography variant="body1">
        Authorities responded to reports of gunfire at a downtown Redmarsh residence. Upon arrival, they discovered Thompson deceased from a gunshot wound. Early reports suggest a violent altercation took place, resulting in a shootout and an apparent suicide at the scene. Police have not released the identities of other individuals involved.
      </Typography>
      <Typography variant="body1">
        Thompson, known for his fearless reporting, was investigating allegations of fraud and money laundering tied to a recent painting deal. Colleagues say he had received threats in the days leading up to his death.
      </Typography>
      <Typography variant="body1">
        The Redmarsh Police Department has launched a full investigation. Anyone with information is urged to contact authorities.
      </Typography>
    </>
  );
}

export default function Case3({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Reporter Dead After Redmarsh Shootout</Typography>
      <NewspaperCutout
        headline="Investigative Reporter Killed Amid Art Scandal Shootout"
        date="April 20th, 2025"
        author="News Desk"
        content={<News1 setPageName={setPageName} />}
        rotation="-5"
        left="2px"
      />
    </div>
  );
}
