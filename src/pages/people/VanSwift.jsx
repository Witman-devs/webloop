import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/van.png";

export default function Victim1({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Van Swift",
          fullName: "Van Swift",
          birthDate: "February 02, 1978",
          occupation: "Businessman",
          affiliation: (
            <Link component="span" onClick={() => setPageName("chemicals")}>
              Redmarsh Chemicals
            </Link>
          ),
          address:
            "12870 Heidenreich Neck Apt. 759, \nRedmarsh, Nocturna, \nZorik",
          image: directorImg,
          bio: `Van Swift is a successful businessman known for his strategic leadership at Redmarsh Chemicals.
          With years of experience in the industry, Van has played a key role in expanding the company's operations and fostering innovation.
          He is respected for his commitment to ethical business practices and his ability to build strong professional relationships. Van's dedication to excellence and his forward-thinking approach have made him a prominent figure in the Nocturna business community.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
