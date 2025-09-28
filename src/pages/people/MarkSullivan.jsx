import { Link, Modal, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/extra-2.png";
import { MedalIcon } from "lucide-react";
import LetterToSon from "../../assets/Notes/noteson.png";
import LetterToSonTxt from "../../assets/Notes/noteson.txt";
import LetterViewer from "../../components/LetterViewer";
import { useState } from "react";
import SingleNonogram from "../../components/SingleNonogram";
import AudioViewer from "../../components/AudioViewer";
import case2Audio from "../../assets/case2.mp3"

export default function Victim({ setPageName }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Officer Mark Sullivan",
          fullName: "Mark Edward Sullivan",
          birthDate: "July 22, 1981",
          deathDate: "January 30, 2005",
          occupation: "Police Officer",
          affiliation: (
            <Link component="span" onClick={() => setPageName("police")}>
              Redmarsh Police Department
            </Link>
          ),
          firstAppearance: "Incident Report - Case #4571",
          address: "221 Oakridge Lane,\nWestbridge,\nRedmarsh",
          image: directorImg,
          bio: `Officer Mark Sullivan served the Redmarsh Police Department just over 1 year. 
He was known for his dedication to community safety and his calm demeanor under pressure. 
Tragically, Officer Sullivan was killed in the line of duty during a shootout on Redmarsh port. 
His bravery and sacrifice are remembered by colleagues and citizens alike.`,
          items: (
            <div>
              <Typography variant="subtitle2">Documents found</Typography>
              <ul>
                <li>
                  <LetterViewer
                    image={LetterToSon}
                    fileSrc={LetterToSonTxt}
                    label="Letters to his son wishing birthday."
                  />
                </li>
                <li>
                  <Link onClick={() => setOpen(true)}>Puzzle left for son</Link>
                  <Modal open={open} onClose={() => setOpen(false)}>
                    <SingleNonogram />
                  </Modal>
                </li>
                <li>
                  <AudioViewer correctPassword="seahorse" fileSrc={case2Audio} label="Autosaved file found on computer cloud"/>
                </li>
              </ul>
            </div>
          ),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
