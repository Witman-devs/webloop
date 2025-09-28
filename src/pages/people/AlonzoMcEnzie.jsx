import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/alonzo.png";
import { MedalIcon } from "lucide-react";

export default function Businessman({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Alonzo McEnzie",
          fullName: "Alonzo McEnzie",
          birthDate: "November 14, 1969",
          deathDate: null,
          occupation: "Businessman",
          affiliation: (
            <Link component="span" onClick={() => setPageName("chemicals")}>
              Redmarsh Chemicals
            </Link>
          ),
          firstAppearance: "Redmarsh Chemicals Registry - 2010",
          address: "44839 Cummerata Causeway Apt. 762, Redmarsh, Nocturna, Zorik",
          image: directorImg,
          bio: `Alonzo McEnzie is a seasoned businessman at Redmarsh Chemicals, where he focuses on strategic development, client relations, and operational execution. 
          Known for his results-driven approach and deep industry insight, Alonzo plays a vital role in supporting the company's commercial growth and strengthening its market presence. 
          His commitment to excellence and collaborative leadership style make him a key contributor to Redmarsh’s continued success.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
