import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/extra-1.png";
import { MedalIcon } from "lucide-react";

export default function Doc2({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Doctor 2</Typography>

      <ProfileCard
        person={{
          name: "Dr. Rohan Mehta",
          fullName: "Rohan Prakash Mehta",
          birthDate: "July 22, 1982",
          deathDate: "",
          occupation: "Cardiologist & Educator",
          affiliation: (
            <Link component="span" onClick={() => setPageName("college")}>
              St. Healmore Medical College
            </Link>
          ),
          firstAppearance: "Student Records - Batch 2000",
          address: "House 12, Greenview Apartments,\nHeartline Road,\nRedmarsh",
          image: directorImg,
          bio: `Dr. Rohan Mehta is a leading cardiologist at Redmarsh Healthcare, recognized for his expertise in interventional cardiology and patient care.
He graduated with honors from St. Healmore Medical College and has contributed to several national heart health campaigns.
Dr. Mehta is also a passionate educator, regularly conducting workshops for young medical professionals and advocating for preventive cardiology.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
