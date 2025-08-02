import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/director.png";
import { MedalIcon } from "lucide-react";

export default function Director({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Director</Typography>

      <ProfileCard
        person={{
          name: "Dr. Aileen Verma",
          fullName: "Aileen Grace Verma",
          birthDate: "March 14, 1990",
          deathDate: "March 14, 2020",
          occupation: "Neurologist & Researcher",
          affiliation: <Link component="span" onClick={()=>setPageName("college")}>St. Healmore Medical College</Link>,
          firstAppearance: "Student Records - Batch 2008",
          address:
            "Flat 3A, Doctor's Residency,\nHealth Sector 4,\nPune, Maharashtra",
          image: directorImg,
          bio: `Dr. Aileen Verma is a renowned neurologist known for her groundbreaking work in neuroplasticity. 
She was one of the top alumni from St. Healmore Medical College and now mentors young doctors across India. 
She is a frequent speaker at conferences and an advocate for mental health policy reform. She also co-founded NeuroAid, an initiative for early detection of neurological disorders.`,
        }}
      />
    </div>
  );
}
