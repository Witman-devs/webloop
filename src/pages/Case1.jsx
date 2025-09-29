import { Link, Typography } from "@mui/material";
import NewsPaperCutout from "../components/NewsPaperCutout";
import CrimeSceneOverlay from '../components/CrimeSceneOverlay';
import "../App.css";

function News1({setPageName}){
    return(
        <>
            <Link component="span" onClick={()=>setPageName("doc1")}> Dr. Juan Martinez </Link> found in staff quarter hung by a rope with suicide note saying he can't take this guilt of being the reason for someones death. 
            This is a case from <Link component="span" onClick={()=>setPageName("hospital")}>RedMarsh Healthcare</Link> which is being handled by <Link component="span" onClick={()=>setPageName("inspector")}> Inspector Olive Harris</Link>. Hospital's Director <Link component="span" onClick={()=>setPageName("director")}>Dr. Cletus Blick</Link> shows grief. Says he lost one of the best doctors at the hospital. He never made any mistake in the past 5 years he was working for the hospital.
        </>
    )
}

function News2({setPageName}){
    return(
      <>
        Another doctor was found dead in the staff quarters, reportedly hung by a rope. While authorities suggest suicide, several details raise suspicion. The so-called suicide note is vague, and colleagues claim the doctor showed no signs of distress. This incident, again at <Link component="span" onClick={()=>setPageName("hospital")}>RedMarsh Healthcare</Link>, is being investigated by <Link component="span" onClick={()=>setPageName("inspector")}>Inspector Olive Harris</Link>. Hospital's Director <Link component="span" onClick={()=>setPageName("director")}>Dr. Cletus Blick</Link> expressed shock. Was this truly a suicide, or is something more sinister happening at the hospital?
      </>
    )
}

export default function Case1({setPageName}) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative", padding: "1vw" }}>
      <CrimeSceneOverlay />
      <Typography className="font" variant="h2">Scandal at the hospital</Typography>
      <NewsPaperCutout
        headline="Doctor hung himself out of guilt!"
        date="12 August 2004"
        author="kelly Alan"
        content={<News1 setPageName={setPageName}/>}
        rotation="-5"
        left="2px"
      />
      <NewsPaperCutout
        headline="Another doctor found mysteriously dead at RedMarsh Healthcare"
        date="12 August 2004"
        author="Michael Thompson"
        content={<News2 setPageName={setPageName}/>}
        rotation="5"
        left="20vw"
      />
    </div>
  );
}
