import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/doc1.png";

export default function Doc1({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Doctor</Typography>

      <ProfileCard
        person={{
          name: "Dr. Juan Martinez",
          fullName: "Juan Martinez",
          birthDate: "July 22, 1982",
          deathDate: "June 5, 2023",
          occupation: "Surgeon & Researcher",
          affiliation: (
            <Link component="span" onClick={() => setPageName("college")}>
              St. Healmore Medical College
            </Link>
          ),
          firstAppearance: "Student Records - Batch 2000",
          address: "Flat 3A, Doctor's Residency,\nHeartline Road,\nRedmarsh",
          image: directorImg,
          bio: (
            <>
              Dr. Juan Martinez is a reputed doctor of <Link onClick={() => setPageName("hospital")}>Redmarsh Healthcare</Link> and a
              renowned neurologist known for his groundbreaking work in
              neuroplasticity. He was one of the top alumni from St. Healmore
              Medical College and now mentors young doctors across Redmarsh. He
              is a frequent speaker at conferences and an advocate for mental
              health policy reform. He also co-founded NeuroAid, an initiative
              for early detection of neurological disorders.
            </>
          ),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
