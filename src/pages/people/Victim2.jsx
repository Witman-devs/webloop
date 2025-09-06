import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/extra-2.png";
import { MedalIcon } from "lucide-react";

export default function Victim({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Officer Mark Sullivan",
          fullName: "Mark Edward Sullivan",
          birthDate: "July 22, 1983",
          deathDate: "April 9, 2023",
          occupation: "Police Officer",
          affiliation: (
            <Link component="span" onClick={() => setPageName("station")}>
              Redmarsh Police Department
            </Link>
          ),
          firstAppearance: "Incident Report - Case #4571",
          address: "221 Oakridge Lane,\nWestbridge,\nRedmarsh",
          image: directorImg,
          bio: `Officer Mark Sullivan served the Westbridge Police Department for over 12 years. 
He was known for his dedication to community safety and his calm demeanor under pressure. 
Tragically, Officer Sullivan was killed in the line of duty during a gang shootout in downtown Westbridge. 
His bravery and sacrifice are remembered by colleagues and citizens alike.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
