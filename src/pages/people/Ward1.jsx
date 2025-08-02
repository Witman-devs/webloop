import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/ward-1.png";
import { MedalIcon } from "lucide-react";
export default function WardPerson({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Ward Employee</Typography>

      <ProfileCard
        person={{
          name: "Samuel Hayes",
          fullName: "Samuel Robert Hayes",
          birthDate: "March 15, 1978",
          deathDate: "—",
          occupation: "Ward Attendant",
          affiliation: (
            <Link component="span" onClick={() => setPageName("redmarsh")}>
              Redmarsh Hospital
            </Link>
          ),
          firstAppearance: "Staff Registry - 2023",
          address: "Suite 12B, Willow Lane Residences,\nRedmarsh City",
          image: directorImg,
          bio: `Samuel Hayes is a ward attendant at Redmarsh Hospital, Fictionalia.
He is known for his positive attitude and resilience in his work.
Samuel was recently seen tending to a patient, John Carter, showing his caring nature and dedication to his role.
Samuel is supported by the dedicated staff and his family as he continues his service.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
