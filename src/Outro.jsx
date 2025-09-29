import { Grid, Typography } from "@mui/material";
import NewsPaperCutout from "./components/NewsPaperCutout";
import "./Outro.css";
import birthRecords from "./assets/birth_records.json";
import { useSound } from "./hook/SoundContext";
import { useEdges } from "@xyflow/react";
import { useEffect } from "react";
import { MUSIC_TITLE } from "./consts";
import MonochromeButton from "./components/MonochromeButton";
import { NavLink, useNavigate } from "react-router";
import alonzo from "./assets/characters/alonzo.png"
import angelina from "./assets/characters/angelina.png"
import ceo from "./assets/characters/ceo.png"
import chemCeo from "./assets/characters/chemCeo.png"
import chemEng from "./assets/characters/chemEng.png"
import dealer from "./assets/characters/dealer.png"
import director from "./assets/characters/director.png"
import doc1 from "./assets/characters/doc1.png"
import doc2 from "./assets/characters/doc2.png"
import extra from "./assets/characters/extra-2.png"
import gangMember from "./assets/characters/gangMember.png"
import inspector from "./assets/characters/inspector.png"
import ivan from "./assets/characters/ivan.png"
import journalist from "./assets/characters/journalist.png"
import media1 from "./assets/characters/media-1.png"
import media2 from "./assets/characters/media-2.png"
import son from "./assets/characters/son.png"
import van from "./assets/characters/van.png"
import victim1 from "./assets/characters/victim-1.png"
import ward from "./assets/characters/ward-2.png"
import ward1 from "./assets/characters/ward1.png"

const charImages = [alonzo,angelina,ceo,chemCeo,chemEng,dealer,director,doc1,doc2,extra,gangMember,inspector,ivan,journalist,media1,media2,son,van,victim1,ward,ward1]

const peopleName = birthRecords.map((record) => record.childName).concat(["Sergio Schroeder", "Randolph Reynolds", "Dewey Kshlerin", "Yvonne Little", "Leroy Waelchi"]);


const ending = {
  1: {
    headline: "No one escapes Detective Hill Proves he is the best",
    content:
      "Detective Hill who went into hibernation after death of his daugter is now back in action. He catches the serial killer, Turns him to goverment. As a part of open challenge He figured out all the information need to apprihand the killer.He furthurmore reveals Organ traficking scandal and all the people involved",
    music: MUSIC_TITLE.Noise
},
2: {
    headline: "Detective Hill lost his edge after death of his daughter",
    content:
    "Detective hill couldn't solve the mystry of oroborus killer, one who is targeting high individuals causing serious concern amost the financial circles. As he romes free, people are concened with there seafty and well being. Nation watches as to what goverment of redmarsh will do.",
    music: MUSIC_TITLE.ManHunt
  },
};

function Sur(){
  return(
    <div style={{maxHeight:"50px",  justifyContent:"center", display: "flex", alignItems:"center"}}>
      <img className="characterImg" style={{rotate: `${Math.random() * 20 - 10}deg`, translate: `(${Math.random()*10-5}px, ${Math.random()*10-5}`}} src={charImages[Math.floor(Math.random()*charImages.length)]}/>
    </div>
  )
}

function Main(){
  const navigate = useNavigate()
  return (
    <div style={{minHeight:"150px", justifyContent:"center", display: "flex", alignItems:"center"}}>
      <MonochromeButton onClick={()=>navigate("/")}>Exit Game</MonochromeButton>    
    </div>
  )
}

// const Sur = ()=>(<div style={{minHeight:"50px", minWidth:"50px", background:"#ff0000", }}></div>)
// const Main = () =>(<div style={{minHeight:"150px", minWidth:"300px", background:"#ccc"}}></div>)

export default function Outro() {
  const endingId = Number.parseInt(localStorage.getItem("end"));
  const headline = ending[endingId].headline;
  const content = ending[endingId].content;
  const { playMainMusic, musicVolume, setMusicVolume } = useSound()
  const navigate = useNavigate()
  useEffect(()=>{
    if(musicVolume <= 0.1) setMusicVolume(0.7)
    playMainMusic(ending[endingId].music)
  },[endingId])

  return (
    <div className="bg">
      <div className="scroll">
        <div className="slam">
            <NewsPaperCutout
            headline={headline}
            date="18 July 2005"
            author="kelly Alan"
            content={content}
            rotation="-5"
            left="30vw"
            />
        </div>
        <div className="names">
            <Typography variant="h2">Thank you for playing the Game</Typography>
            <br/>
            <Typography variant="h3">Developers</Typography>
                <br/>
                <Typography variant="h5">Divergent Root</Typography>
                <Typography variant="h5">Lurid</Typography>
                <Typography variant="h5">Witman</Typography>
                <br/>
                <br/>
                <br/>
            <Typography variant="h3">Thank you to all people for existing in our Universe</Typography>
            <Typography variant="caption">All the made up names so you can enjoy the music</Typography>
            <br/>
            <br/>
            {
                peopleName.map(name=><Typography variant="body1">{name}</Typography>)
            }
        </div>
        
      </div>
      <div className="endScene">
        <Grid container spacing={2} alignItems="center" justifyContent="center" padding={2} columns={11} style={{minHeight:"100vh", minWidth:"100vw"}}>
          <Grid size={2} >
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>

          <Grid size={3} >
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Sur/>
          </Grid>

          <Grid size={3}>
              <Sur/>
          </Grid>
          <Grid size={1}>
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Main/>
          </Grid>
          <Grid size={1}>
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Sur/>
          </Grid>

          <Grid size={3}>
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Sur/>
          </Grid>
          <Grid size={3}>
              <Sur/>
          </Grid>

        <Grid size={2} >
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>
          <Grid size={2}>
              <Sur/>
          </Grid>

        </Grid>
      </div>

      {/* <div className="endingCharacters">
        <img src={alonzo}/>
      </div>
      */}
      <div className="exitbtn">
        <MonochromeButton onClick={()=>navigate("/")}>Exit Game</MonochromeButton>
      </div>
    </div>
  );
}
