import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/jeanette.png";
import "../../index.css"; // Ensure styles are imported
import { MedalIcon } from "lucide-react";

export default function ChemCeo({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Jeanette Murray",
          fullName: "Jeanette Murray",
          birthDate: "September 19, 1972",
          deathDate: null,
          occupation: "Research Scientist",
          affiliation: (
            <Link component="span" onClick={() => setPageName("company")}>
              Generico
            </Link>
          ),
          firstAppearance: null,
          address: "842 Elouise Meadows Suite 299, Redmarsh, Nocturna, Zorik",
          image: directorImg,
          bio: `Jeanette Murray is a dedicated and innovative Research Scientist at Generico Pharmaceutical, where she plays a crucial role in advancing the company’s drug development pipeline. With a strong academic foundation and a passion for scientific discovery, Jeanette leads cutting-edge research initiatives focused on optimizing formulations and discovering novel therapeutic solutions. Her expertise in molecular biology and pharmacology allows her to approach complex challenges with a methodical, data-driven mindset, contributing to Generico’s mission to bring effective, affordable medications to the market`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
