import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/victim-1.png";

export default function Victim1({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Dr. John Carter",
          fullName: "Johnathan Michael Carter",
          birthDate: "September 22, 1985",
          occupation: "Optometrist",
          affiliation: (
            <Link component="span" onClick={() => setPageName("hospital")}>
              Redmarsh Healthcare
            </Link>
          ),
          firstAppearance: "Alumni records - 2000",
          address:
            "Flat 7C, Doctor's Residency,\nHeartline Road,\nRedmarsh",
          image: directorImg,
          bio: `Dr. John Carter is a highly respected optometrist at Redmarsh Healthcare, known for his precision in vision care and commitment to patient education.
He graduated with honors from the Kingsborough College of Optometry and has since been actively involved in advancing eye health awareness through community outreach programs.
Dr. Carter is passionate about preventive eye care and regularly conducts vision screening camps and educational workshops for students and working professionals. His approachable nature and thorough approach to diagnosis make him a trusted expert in comprehensive eye care.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
