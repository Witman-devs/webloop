import { Link, Typography } from "@mui/material";
import NewspaperCutout from "../components/NewsPaperCutout";

function News1({setPageName}){
    return(
        <>
            <Link component="span" onClick={()=>setPageName("doc1")}> Dr. Juan Martinez </Link> found in staff quater hung by the rope with suicide note saying he can't take this guilt of being reason for someones death. 
            This is case from <Link component="span" onClick={()=>setPageName("hospital")}>RedMarsh Healthcare</Link>, case is handled by <Link component="span" onClick={()=>setPageName("inspector")}> Inspector Amarjit Singh</Link>. Hospital's Director <Link component="span" onClick={()=>setPageName("director")}>Dr. Arjun Verma</Link> shows grief. Says he lost one of the best doctors at the hospital. He never made any mistake in past 5 years he was working for the hospital.
        </>
    )
}

function News2({setPageName}){
    return(
      <>
        Another doctor was found dead in the staff quarters, reportedly hung by a rope. While authorities suggest suicide, several details raise suspicion. The so-called suicide note is vague, and colleagues claim the doctor showed no signs of distress. This incident, again at <Link component="span" onClick={()=>setPageName("hospital")}>RedMarsh Healthcare</Link>, is being investigated by <Link component="span" onClick={()=>setPageName("inspector")}>Inspector Amarjit Singh</Link>. Hospital's Director <Link component="span" onClick={()=>setPageName("director")}>Dr. Arjun Verma</Link> expressed shock. Was this truly a suicide, or is something more sinister happening at the hospital?
      </>
    )
}

export default function Case1({setPageName}) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Scandal at the hospital</Typography>
      <NewspaperCutout
        headline="Doctor hung himself out of guilt!"
        date="August 2, 2025"
        author="kelly Alan"
        content={<News1 setPageName={setPageName}/>}
        rotation="-5"
        left="2px"
      />
      <NewspaperCutout
        headline="Another doctor found mysteriously dead at RC hostpital"
        date="August 2, 2025"
        author={<Link component="span" onClick={()=>setPageName("victim3")}>Michael Thompson</Link>}
        content={<News2 setPageName={setPageName}/>}
        rotation="5"
        left="20vw"
      />
    </div>
  );
}
