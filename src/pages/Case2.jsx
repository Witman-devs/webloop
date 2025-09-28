import { Link, Typography } from "@mui/material";
import NewsPaperCutout from "../components/NewsPaperCutout";
import CrimeSceneOverlay from "../components/CrimeSceneOverlay";
import "../App.css";

function News1({ setPageName }) {
  return (
    <>
      Police Officer <Link component="span" onClick={() => setPageName("victim2")}>
        Mark Sullivan
      </Link> was killed in a gang shootout near the{" "}
      <Link component="span" onClick={() => setPageName("port")}>
        Redmarsh Port
      </Link>
      . Eyewitnesses report that the officer was caught in the crossfire while responding to a disturbance in the area. The case is being investigated by{" "}
      <Link component="span" onClick={() => setPageName("inspector")}>
        Inspector Olive Harris
      </Link>
      . Authorities are searching for suspects and urge anyone with information to come forward.
    </>
  );
}

export default function Case2({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative", padding: "1vw" }}>
      <CrimeSceneOverlay />
      <Typography className="font" variant="h2">Shootout at port</Typography>
      <NewsPaperCutout
        headline="Officer killed in gang shootout near Redmarsh Port"
        date="February 1, 2005"
        author={<Link component="span" onClick={()=>setPageName("victim3")}>Michael Thompson</Link>}
        content={<News1 setPageName={setPageName} />}
        rotation="-3"
        left="10px"
      />
    </div>
  );
}
