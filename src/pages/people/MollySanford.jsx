import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/chemCeo.png";
import { MedalIcon } from "lucide-react";

export default function ChemCeo({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Molly Sanford",
          fullName: "Molly Sanford",
          birthDate: "July 12, 1965",
          deathDate: null,
          occupation: "Chief Executive Officer",
          affiliation: (
            <Link component="span" onClick={() => {}}>
              Redmarsh Chemicals
            </Link>
          ),
          firstAppearance: "Redmarsh Chemicals Registry - 2010",
          address: "Suite 140,\nWillow Lane Residences,\nRedmarsh City",
          image: directorImg,
          bio: `Molly Sanford is the visionary CEO of Redmarsh Chemicals, steering the company toward innovation and growth in the competitive world of chemical manufacturing. 
          Known for her sharp business acumen and strategic mindset, Molly commands respect both inside the boardroom and across the industry. 
          Under her leadership, Redmarsh has expanded its reach into cutting-edge research and lucrative markets.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
