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
import jeanette from "./assets/characters/jeanette.png"
import media2 from "./assets/characters/media-2.png"
import francisco from "./assets/characters/francisco.png"
import van from "./assets/characters/van.png"
import victim1 from "./assets/characters/victim-1.png"
import ward from "./assets/characters/ward-2.png"
import ward1 from "./assets/characters/ward1.png"
import slice1 from "./assets/splotches/slice1.png"
import slice2 from "./assets/splotches/slice2.png"
import slice3 from "./assets/splotches/slice3.png"
import slice4 from "./assets/splotches/slice4.png"
import slice5 from "./assets/splotches/slice5.png"
import slice6 from "./assets/splotches/slice6.png"
import slice7 from "./assets/splotches/slice7.png"
import slice8 from "./assets/splotches/slice8.png"
import slice9 from "./assets/splotches/slice9.png"
import slice10 from "./assets/splotches/slice10.png"
import slice11 from "./assets/splotches/slice11.png"
import slice12 from "./assets/splotches/slice12.png"
import slice13 from "./assets/splotches/slice13.png"
import slice14 from "./assets/splotches/slice14.png"
import slice15 from "./assets/splotches/slice15.png"
import bleed from "./assets/splotches/bleed.png"
import drip from "./assets/splotches/drip.png"

const charImages = [
  alonzo,
  angelina,
  ceo,
  chemCeo,
  chemEng,
  dealer,
  director,
  doc1,
  doc2,
  extra,
  gangMember,
  inspector,
  ivan,
  journalist,
  jeanette,
  media2,
  francisco,
  van,
  victim1,
  ward,
  ward1,
];

const peopleName = birthRecords
  .map((record) => record.childName)
  .concat([
    "Sergio Schroeder",
    "Randolph Reynolds",
    "Dewey Kshlerin",
    "Yvonne Little",
    "Leroy Waelchi",
  ]);

const ending = {
  1: {
    articles: [
      {
        headline: "No One Escapes. Detective Hill Proves He Is the Best",
        date: "18th July 2005",
        content:
          "Detective Hill, who went into hibernation after the death of his daughter, is now back in action. He caught the serial killer and turned him over to the government. As part of an open challenge, he figured out all the information needed to apprehend the killer.",
      },
      {
        headline: "Detective Hill Uncovers the Organ Trafficking Scandal",
        date: "19th August 2005",
        content:
          "Detective Hill uncovered an organ trafficking scandal at Redmarsh Healthcare, involving the killing of patients for their organs. He exposed everyone involved. The current head of Redmarsh Healthcare, Dr. Hubert Lowe, and former president Dr. Cletus Blick were implicated, along with the CFO of Generico, who is believed to be the mastermind behind the operation.",
      },
      {
        headline: "Will Justice Be Served?",
        date: "21st September 2005",
        content:
          "Roger Hintz was found guilty of murdering three people and has been sentenced to life in prison. Meanwhile, several individuals involved in the racket are still free. Actions are ongoing against police officer Olive Harris. Sandy Harris is also under investigation. Samuel was sentenced to seven years for the murder of Dr. Juan. Angelina has been suspended from the organization until proven innocent and is currently out of the country. Hubert Lowe is on the run.",
      },
      {
        headline:
          "Michael Thompson from New Flash Agency Killed While Investigating",
        date: "23rd October 2005",
        content:
          "Police confirm that news reporter Michael Thompson was killed while investigating the organ trafficking scandal. They have apprehended the killer, who confessed that he was ordered to kill the reporter by Molly Sanford.",
      },
    ],
    music: MUSIC_TITLE.Noise,
  },
  2: {
    articles: [
      {
        headline: "Detective Hill Lost His Edge After His Daughter's Death",
        date: "24th November 2005",
        content:
          "Detective Hill has failed to solve the mystery of the Oroborus Killer, who continues to target high-profile individuals, causing serious concern among financial and political circles. As the killer remains at large, citizens are increasingly fearful for their safety. The nation watches closely, waiting to see how the government of Redmarsh will respond.",
      },
      {
        headline: "The Oroborus Killer Strikes Again at Generico",
        date: "26th December 2005",
        content:
          "The Oroborus Killer has struck once more, this time targeting Angelina Grimes, CFO of Generico Corporation. The killer left the familiar symbol at the scene. This marks the third murder following the failed open challenge. With Sandy Harris last month, and now Angelina Grimes and her driver, fear is spreading among Redmarsh's elite. Many business leaders are reportedly leaving the country.",
      },
      {
        headline: "Detective Hill Uncovers the Organ Trafficking Scandal",
        date: "28th January 2006",
        content:
          "Detective Hill has uncovered an organ trafficking scandal operating through Redmarsh Healthcare, involving the killing of patients for their organs. He exposed those involved, including the current head Dr. Hubert Lowe and former president Dr. Cletus Blick. CFO of Generico, Angelina Grimes, is believed to have been one of the masterminds behind the network. Officer Olive Harris has turned himself in under protection out of fear of the Oroborus Killer.",
      },
      {
        headline: "State Divided: Vigilante or Cold-Blooded Killer?",
        date: "2nd March 2006",
        content:
          "As the investigation progresses, a growing group of citizens has emerged in support of the Oroborus Killer. They argue that the corrupt system requires drastic intervention and view the killer as a vigilante targeting the powerful. Meanwhile, concerns about law and order escalate across Redmarsh. The government faces mounting pressure to act swiftly and bring the killer to justice.",
      },
    ],
    music: MUSIC_TITLE.ManHunt,
  },
};

function Sur() {
  return (
    <div
      style={{
        maxHeight: "50px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        className="characterImg"
        style={{
          rotate: `${Math.random() * 20 - 10}deg`,
          translate: `(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}`,
        }}
        src={charImages[Math.floor(Math.random() * charImages.length)]}
      />
    </div>
  );
}

function Main() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "150px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MonochromeButton onClick={() => navigate("/")}>
        Exit Game
      </MonochromeButton>
    </div>
  );
}
const overlayImages = [slice1, slice2, slice3, slice4, slice5, slice6, slice7, slice8, slice9, slice10, slice11, slice12, slice13, slice14, slice15];
const getOverLayImage = () => overlayImages[Math.floor(Math.random() * overlayImages.length)];
// const Main = () =>(<div style={{minHeight:"150px", minWidth:"300px", background:"#ccc"}}></div>)

export default function Outro() {
  const endingId = Number.parseInt(localStorage.getItem("end"));
  const articles = ending[endingId].articles;
  const { playMainMusic, musicVolume, updateMusicVolume } = useSound();
  const navigate = useNavigate();

  useEffect(() => {
    if (musicVolume <= 0.1) updateMusicVolume(0.7);
    playMainMusic(ending[endingId].music);
    setTimeout(() => {
      document
        .querySelectorAll(".slam")
        .forEach((el) => (el.style.display = "none"));
    }, 58000);
  }, [endingId]);

  function Sur(){
    return(
      <div className={endingId==2?'dead':null} style={{maxHeight:"50px",  justifyContent:"center", display: "flex", alignItems:"center"}}>
        {endingId==2&&
        <img
        className="dead"
        style={{
          position: "absolute",
          height: "300%", // Scale to cover the base image area
          zIndex: 10 // Ensure it sits on top of the base image (which defaults to z-index 0)
        }}
        src={getOverLayImage()} // Use your specific source here
        alt="Overlay"
        />
        }
        <img className="characterImg" style={{rotate: `${Math.random() * 20 - 10}deg`, translate: `(${Math.random()*10-5}px, ${Math.random()*10-5}`}} src={charImages[Math.floor(Math.random()*charImages.length)]}/>
      </div>
    )
  }
  return (
    <div className="bg">
      {articles.map((article, idx) => {
        return (
          <div
            className="slam"
            key={idx}
            style={{
              position: "absolute",
              top: idx > 1 ? "50vh" : 0,
              left: idx % 2 ? "calc(100vw - 750px)" : "3vw",
            }}
          >
            <NewsPaperCutout
              headline={article.headline}
              date={article.date}
              author="kelly Alan"
              content={article.content}
              rotation={Math.random() * 7 * (idx % 2 ? 1 : -1)}
              left={0}
            />
          </div>
        );
      })}
      <div className="scroll">
        <div className="names">
          <Typography variant="h2">Thank you for playing the Game</Typography>
          <br />
          <Typography variant="h3">Developers</Typography>
          <br />
          <Typography variant="h5">Divergent Root</Typography>
          <Typography variant="h5">Lurid</Typography>
          <Typography variant="h5">Witman</Typography>
          <br />
          <br />
          <br />
          <Typography variant="h3">
            Thank you to all people for existing in our Universe
          </Typography>
          <Typography variant="caption">
            All the made up names so you can enjoy the music
          </Typography>
          <br />
          <br />
          {peopleName.map((name) => (
            <Typography variant="body1">{name}</Typography>
          ))}
        </div>
      </div>
      <div className="endScene">
        {endingId==2&&
        <img
          src={bleed}
          alt="top banner"
          className="bleed"
        />}
        {endingId==2&&
        <img
          src={drip}
          alt="top banner"
          className="bleed"
        />}
        <Grid container spacing={2} alignItems="center" justifyContent="center" padding={2} columns={11} style={{minHeight:"100vh", minWidth:"100vw"}}>
          <Grid size={2} >
              <Sur/>
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>

          <Grid size={3}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Sur />
          </Grid>

          <Grid size={3}>
            <Sur />
          </Grid>
          <Grid size={1}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Main />
          </Grid>
          <Grid size={1}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Sur />
          </Grid>

          <Grid size={3}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Sur />
          </Grid>
          <Grid size={3}>
            <Sur />
          </Grid>

          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
          <Grid size={2}>
            <Sur />
          </Grid>
        </Grid>
      </div>

      {/* <div className="endingCharacters">
        <img src={alonzo}/>
      </div>
      */}
      <div className="exitbtn">
        <MonochromeButton onClick={() => navigate("/")}>
          Exit Game
        </MonochromeButton>
      </div>
    </div>
  );
}
