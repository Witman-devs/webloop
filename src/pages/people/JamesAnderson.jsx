import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/ceo.png";
import { MedalIcon } from "lucide-react";
import case3Audio from "../../assets/case3.mp3"
import AudioViewer from "../../components/AudioViewer";
export default function CEO({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Mr. James Anderson",
          fullName: "James Robert Anderson",
          birthDate: "April 22, 1977",
          deathDate: "July 10, 2005",
          occupation: "Chief Executive Officer",
          affiliation: (
            <Link component="span" onClick={() => setPageName("company")}>
              Generico
            </Link>
          ),
          firstAppearance: "Board Members - 1999",
          address: "Suite 42, Skyline Tower,\nInnovation District,\nRedmarsh",
          image: directorImg,
          bio: `Mr. James Anderson is the visionary CEO of Generico Pharmaceuticals, leading the company since 1999. Just like his father he was also able to handle company work at extremely young age.
Under his leadership, Generico has become a pioneer in futuristic technologies and digital solutions.
He is recognized for his innovative thinking, commitment to ethical business, and fostering a collaborative workplace.
James is also a strong advocate for STEM education and frequently speaks at global technology summits.`,
          items: (
            <div>
              <Typography variant="subtitle2">Documents found</Typography>
              <ul>
                <li>
                  Detective I am leaving this audio clip for you. <br/>
                  This is for all your hardwork and solving cases. <br/>
                  Password is your daughter's name. All lowercase. just first name.<br/>
                  <AudioViewer correctPassword="roxanne" fileSrc={case3Audio} label="Password is your daughter's name."/>
                </li>
              </ul>
            </div>
          ),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
