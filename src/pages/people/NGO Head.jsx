import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/ngoHead.png";
import { MedalIcon } from "lucide-react";

export default function NGOHead({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>

      <ProfileCard
        person={{
          name: "Mr. John Anderson",
          fullName: "John Anderson",
          birthDate: "July 22, 1975",
          deathDate: null,
          occupation: "NGO Head & Social Worker",
          affiliation: (
            <Link component="span" onClick={() => setPageName("ngo")}>
              Hope for Tomorrow
            </Link>
          ),
          firstAppearance: "NGO Registry - 2010",
          address: "123 Maple Street,\nWillow Lane,\nRedmarsh",
          image: directorImg,
          bio: `Mr. John Anderson is the founder and head of Hope for Tomorrow, an NGO dedicated to supporting education and healthcare initiatives for underprivileged communities in the United States. He is recognized for his commitment to social causes and his leadership in building sustainable programs for community development.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
