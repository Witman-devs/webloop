import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/inspector.png";
import { MedalIcon } from "lucide-react";

export default function Inspector({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Police Inspector</Typography>

      <ProfileCard
        person={{
          name: "Inspector John Miller",
          fullName: "Johnathan Miller",
          birthDate: "July 22, 1982",
          deathDate: null,
          occupation: "Police Inspector",
          affiliation: (
            <Link component="span" onClick={() => setPageName("police-station")}>
              New York City Police Department
            </Link>
          ),
          firstAppearance: "Case File #102 - 2015",
          address:
            "Inspector's Quarters,\nPolice Colony,\nWillow Lane,\nRedmarsh",
          image: directorImg,
          bio: `Inspector John Miller is a decorated officer known for his integrity and sharp investigative skills.
He has solved several high-profile cases and is respected by both his peers and the community.
He is committed to upholding the law and often conducts outreach programs to build trust between the police and citizens.`,
        }}
      />
    </div>
  );
}
