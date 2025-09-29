import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/ward1.png";

export default function WardPerson({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative", padding: "2vw" }}>
      <ProfileCard
        person={{
          name: "Samuel Hayes",
          fullName: "Samuel Robert Hayes",
          birthDate: "March 15, 1978",
          deathDate: "",
          occupation: "Ward Attendant",
          affiliation: (
            <Link component="span" onClick={() => setPageName("hospital")}>
              Redmarsh Hospital
            </Link>
          ),
          firstAppearance: "Staff Registry - 1999",
          address: "Suite 12B, Willow Lane Residences,\nRedmarsh City",
          image: directorImg,
          bio: `Samuel Hayes is a ward attendant at Redmarsh Hospital, Zorik.
She is known for her positive attitude and resilience in her work.
Samuel was recently seen tending to a patient, Emily Kihn, showing her caring nature and dedication to her role.
Samuel is supported by the dedicated staff and her family as she continues her service.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
