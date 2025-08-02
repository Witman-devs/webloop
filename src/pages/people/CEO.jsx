import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/ceo.png";
import { MedalIcon } from "lucide-react";

export default function CEO({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of CEO</Typography>

      <ProfileCard
        person={{
          name: "Mr. James Anderson",
          fullName: "James Robert Anderson",
          birthDate: "April 22, 1975",
          deathDate: "",
          occupation: "Chief Executive Officer",
          affiliation: (
            <Link component="span" onClick={() => setPageName("companyA")}>
              NovaTech Dynamics Inc.
            </Link>
          ),
          firstAppearance: "Board Members - 2015",
          address:
            "Suite 42, Skyline Tower,\nInnovation District,\nRedmarsh",
          image: directorImg,
          bio: `Mr. James Anderson is the visionary CEO of NovaTech Dynamics, leading the company since 2015.
Under his leadership, NovaTech has become a pioneer in futuristic technologies and digital solutions.
He is recognized for his innovative thinking, commitment to ethical business, and fostering a collaborative workplace.
James is also a strong advocate for STEM education and frequently speaks at global technology summits.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
