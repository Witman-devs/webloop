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
              Dr. Juan Martinez is a skilled surgeon and dedicated medical
              researcher, known for his precision in the operating room and
              commitment to advancing clinical practices. 
              Dr. Juan Martinez was the Chief Surgeon at{" "}
              <Link onClick={() => setPageName("hospital")}>
                Redmarsh Healthcare
              </Link>. A graduate of St.
              Healmore Medical College, Batch of 2005, he brings over two
              decades of experience to patient care and surgical innovation. Dr.
              Martinez continues to contribute to medical science through
              research publications and active participation in global surgical
              forums.
            </>
          ),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
