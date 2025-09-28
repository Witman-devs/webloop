import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/journalist.png";
import { MedalIcon } from "lucide-react";
export default function Reporter({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Michael Thompson",
          fullName: "Michael Andrew Thompson",
          birthDate: "May 14, 1985",
          deathDate: "April 20, 2023",
          occupation: "Investigative Reporter",
          affiliation: (
            <Link
              component="span"
              onClick={() => setPageName("news")}
            >
              Atlas News Agency
            </Link>
          ),
          firstAppearance: "News Archives - March 2020",
          address: "Apartment 7C, Willow Lane,\nRedmarsh,\nMidwest",
          image: directorImg,
          bio: `Michael Thompson is an investigative journalist renowned for his determination to uncover the truth. He is currently working to unravel the mysterious suicide in Redmarsh and its possible connection to the recent gang shootout.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
