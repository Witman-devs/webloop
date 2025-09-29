import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/francisco.png";
import "../../index.css"; // Ensure styles are imported
import { MedalIcon } from "lucide-react";

export default function ChemCeo({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Francisco Barton",
          fullName: "Francisco Barton",
          birthDate: "June 25, 1981",
          deathDate: null,
          occupation: "Sales Manager",
          affiliation: (
            <Link component="span" onClick={() => setPageName("company")}>
              Generico
            </Link>
          ),
          firstAppearance: null,
          address: "99220 Kshlerin Brooks Apt. 615, Redmarsh, Nocturna, Zorik",
          image: directorImg,
          bio: `Francisco Barton is a young, ambitious and results-oriented Sales Manager at Generico Pharmaceutical, where he plays a pivotal role in driving revenue growth and expanding the company's market presence. 
          With a strong background in sales strategy and client relationship management, Francisco has quickly established himself as a key leader in the company's sales team. 
          Francisco’s strategic approach to sales, combined with his dedication to customer satisfaction, has helped boost Generico’s competitive edge in a rapidly evolving market.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
