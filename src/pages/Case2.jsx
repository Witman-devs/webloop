import { Link, Typography } from "@mui/material";
import NewsPaperCutout from "../components/NewsPaperCutout";
import CrimeSceneOverlay from "../components/CrimeSceneOverlay";
import "../App.css";

function News1({ setPageName }) {
  return (
    <>
      Police Officer <Link component="span" onClick={() => setPageName("victim2")}>
        Mark Sullivan
      </Link> was killed in a shootout on the
      <Link component="span" onClick={() => setPageName("port")}>
        Redmarsh Port
      </Link>
      . Arrived in the nick of time,
      <Link component="span" onClick={() => setPageName("inspector")}>
        Inspector Olive Harris
      </Link> reported what happen at the port. She was able to injure one of the suspects. 
      Mark Sullivan was able to kill one of the member of gang <Link component="span" onClick={() => setPageName("ivan")}>
        Ivan Lofer. 
      </Link>
      The case is being investigated by him. Authorities are searching for suspects and urge anyone with information to come forward.
    </>
  );
}

export default function Case2({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative", padding: "1vw" }}>
      <CrimeSceneOverlay />
      <Typography className="font" variant="h2">Shootout at port</Typography>
      <NewsPaperCutout
        headline="Officer killed in a shootout on Redmarsh Port"
        date="February 1, 2005"
        author={<Link component="span" onClick={()=>setPageName("victim3")}>Michael Thompson</Link>}
        content={<News1 setPageName={setPageName} />}
        rotation="-3"
        left="10px"
      />
    </div>
  );
}
