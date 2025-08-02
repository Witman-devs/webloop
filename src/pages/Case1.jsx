import { Link, Typography } from "@mui/material";
import NewspaperCutout from "../components/NewsPaperCutout";

function News1({setPageName}){
    return(
        <>
            Doctor found in staff quater hung by the rope with suicide note saying he can't take this guilt of being reason for someones death. 
            This is case from <Link component="span" onClick={()=>setPageName("hospital")}>RC hospital</Link>, case is handled by <Link component="span" onClick={()=>setPageName("inspector")}> Inspector</Link>. Hospital's Director <Link component="span" onClick={()=>setPageName("director")}>Dr. Director</Link> shows grief. Says he lost one of the best doctors at the hospital. He never made any mistake in past 5 years he was working for the hospital.
        </>
    )
}

export default function Case1({setPageName}) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Scandal at the hospital</Typography>
      <NewspaperCutout
        headline="Doctor hung himself out of guilt!"
        date="August 2, 2017"
        author="kelly Alan"
        content={<News1 setPageName={setPageName}/>}
        rotation="-5"
        left="2px"
      />
      <NewspaperCutout
        headline="Another doctor found mysteriously dead at RC hostpital"
        date="August 2, 2025"
        author={<Link component="span" onClick={()=>setPageName("journalist")}> JJ Jhonson</Link>}
        content="A coincedent or cold blooded murder ?"
        rotation="5"
        left="20vw"
      />
    </div>
  );
}
