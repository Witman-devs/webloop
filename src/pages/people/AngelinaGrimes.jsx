import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/angelina.png";
import { MedalIcon } from "lucide-react";

export default function Businesswoman({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Angelina Grimes",
          fullName: "Angelina Grimes",
          birthDate: "July 12, 1965",
          deathDate: null,
          occupation: "Chief Financial Officer",
          affiliation: (
            <Link component="span" onClick={() => setPageName("company")}>
              Generico
            </Link>
          ),
          firstAppearance: "Board Members - 1999",
          address: "2203 Clarabelle Mountain Apt. 944, Redmarsh, Nocturna, Zorik",
          image: directorImg,
          bio: `Angelina Grimes is the Chief Financial Officer at Generico, 
          where she leads the company’s financial strategy, planning, and risk management. 
          With over 15 years of experience in corporate finance and a strong background in the pharmaceutical industry, 
          Angelina plays a key role in driving operational efficiency and long-term growth.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
