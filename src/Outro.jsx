import { Typography } from "@mui/material";
import NewsPaperCutout from "./components/NewsPaperCutout";
import "./Outro.css";
import birthRecords from "./assets/birth_records.json";
import { useSound } from "./hook/SoundContext";
import { useEdges } from "@xyflow/react";
import { useEffect } from "react";
import { MUSIC_TITLE } from "./consts";
import MonochromeButton from "./components/MonochromeButton";
import { NavLink, useNavigate } from "react-router";


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
      <div className="exitbtn">
        <MonochromeButton onClick={()=>navigate("/")}>Exit Game</MonochromeButton>
      </div>
    </div>
  );
}
