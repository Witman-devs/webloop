import { Typography } from "@mui/material";
import notfound from "../assets/notfound.png";
import { useEffect } from "react";

export default function NotFound({setPageName}) {
  useEffect(()=>{
    setTimeout(()=>setPageName("home"), 5*1000);
  }, [])
  return (
    <div style={{width:"100vw"}}>
      <Typography variant="h1">
        Some thing is wrong with this time branch let me send you back to your timeline.
      </Typography>
      <img src={notfound} width="100%"/>
    </div>
  );
}
