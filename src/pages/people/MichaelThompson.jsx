import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/journalist.png";
import LetterViewer from "../../components/LetterViewer";
import Photo from "../../assets/Notes/cipher.png";
import PhotoTxt from "../../assets/Notes/cipher.txt";
import Grille from "../../assets/Notes/grille.png";
import GrilleTxt from "../../assets/Notes/grille.txt";
import ReporterNote from "../../assets/Notes/reporterNote.jpg";
import ReporterNoteTxt from "../../assets/Notes/reporterNote.txt";
import LetterViewerPassword from "../../components/LetterViewerPassword";


export default function Reporter({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Michael Thompson",
          fullName: "Michael Andrew Thompson",
          birthDate: "May 14, 1985",
          deathDate: "April 20, 2023",
          occupation: "Investigative Reporter",
          affiliation: (
            <Link
              component="span"
              onClick={() => setPageName("newsAgency")}
            >
              Atlas News Agency
            </Link>
          ),
          firstAppearance: "News Archives - March 2020",
          address: "Apartment 7C, Willow Lane,\nRedmarsh,\nMidwest",
          image: directorImg,
          bio: `Michael Thompson is an investigative journalist. He loves puzzles. He renowned for his determination to uncover the truth. He is currently working to unravel the gang behind the recent shootout at Redmarsh port.`,
          items:(
            <div>
              <Typography variant="subtitle2">Documents found</Typography>
              <ul>
                <li>
                  <LetterViewer
                    image={Photo}
                    fileSrc={PhotoTxt}
                    label="A random photo Michael likes to keep on this desk"
                  />
                </li>
                <li>
                  <LetterViewer
                    image={Grille}
                    fileSrc={GrilleTxt}
                    label="A random piece of paper with holes that Michael likes to keep on this desk"
                  />
                </li>
                <li>
                  <LetterViewerPassword
                    image={ReporterNote}
                    fileSrc={ReporterNoteTxt}
                    label="A locked drawer."
                    correctAnswer="redherring"
                  />
                </li>
              </ul>
            </div>
          )
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
