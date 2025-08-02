import { Link, Typography } from "@mui/material";
import NewspaperCutout from "../components/NewsPaperCutout";

function News1({ setPageName }) {
  return (
    <>
      An officer was killed in a gang shootout near the{" "}
      <Link component="span" onClick={() => setPageName("port")}>
        Redmarsh Port
      </Link>
      . Eyewitnesses report that the officer was caught in the crossfire while responding to a disturbance in the area. The case is being investigated by{" "}
      <Link component="span" onClick={() => setPageName("inspector")}>
        Inspector
      </Link>
      . Authorities are searching for suspects and urge anyone with information to come forward.
    </>
  );
}

function News2({ setPageName }) {
  return (
    <>
      Earlier this week, the public painting deal occured at the <Link component="span" onClick={() => setPageName("port")}>Redmarsh Port</Link> docks. Although everything appeared above board, something about the exchange struck me as suspicious. Now, with an officer killed at the very same location during a gang shootout, I can't help but wonder if the two events are connected.
    </>
  );
}

export default function Case2({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Shootout at port</Typography>
      <NewspaperCutout
        headline="Officer killed in gang shootout near Redmarsh Port"
        date="August 3, 2025"
        author="Staff Reporter"
        content={<News1 setPageName={setPageName} />}
        rotation="-3"
        left="10vw"
      />
      <NewspaperCutout
        headline="Reporter ties shootout to suspicious painting deal"
        date="August 4, 2025"
        author={<Link component="span" onClick={()=>setPageName("victim3")}>Michael Thompson</Link>}
        content={<News2 setPageName={setPageName} />}
        rotation="2"
        left="18vw"
      />
    </div>
  );
}
