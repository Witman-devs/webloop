import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/victim-1.png";
import { MedalIcon } from "lucide-react";

export default function Victim1({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Patient</Typography>

      <ProfileCard
        person={{
          name: "John Carter",
          fullName: "Johnathan Michael Carter",
          birthDate: "July 22, 1985",
          deathDate: "April 3, 2023",
          occupation: "Patient",
          affiliation: (
            <Link component="span" onClick={() => setPageName("redmarsh")}>
              Redmarsh Psychiatric Hospital
            </Link>
          ),
          firstAppearance: "Patient Intake - 2023",
          address:
            "Room 14B, Redmarsh Psychiatric Hospital,\nWillow Lane,\nRedmarsh",
          image: directorImg,
          bio: `John Carter is a long-term patient at Redmarsh Psychiatric Hospital in the fictional city of Westland. 
He was admitted in early 2023 following a series of unexplained episodes. 
John is known for his quiet demeanor and has become a familiar face among the hospital staff. 
His case is considered unique due to the rare nature of his symptoms and his resilience throughout treatment.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
