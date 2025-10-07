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
       In a shocking incident, the director, <Link component="span" onClick={()=>setPageName("director")}>Dr. Cletus Blick</Link> of <Link component="span" onClick={()=>setPageName("hospital")}>RedMarsh Healthcare</Link> was found dead in his home, fatally stabbed with a knife.
Police discovered a strange Ouroboros symbol at the scene — raising chilling questions: is this the work of a cult, a gang, a serial killer, or an enraged client seeking revenge?
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
        author="Michael Thompson"
        content={<News1 setPageName={setPageName}/>}
        rotation="-5"
        left="2px"
      />
      <NewsPaperCutout
        headline="Hospital Director murdered!!"
        date="4 May 2005"
        author="Kelly Alan"
        content={<News2 setPageName={setPageName}/>}
        rotation="5"
        left="20vw"
      />
    </div>
  );
}
