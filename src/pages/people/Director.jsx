import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/director.png";
import suicideNote from "../../assets/Notes/suicideNote.png";
import complaintLetter1 from "../../assets/Notes/complaintLetter1.png";
import ViewImage from "../../components/ViewImage";

export default function Director({ setPageName }) {
  const flagFound = localStorage.getItem("flaggedStudent") === "Arjun Raj Verma";

  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <Typography variant="h2">Personal page of Director</Typography>

      <ProfileCard
        person={{
          name: "Dr. Arjun Verma",
          fullName: "Arjun Raj Verma",
          birthDate: "December 09, 1963",
          deathDate: "September 14, 2023",
          occupation: "Neurologist & Researcher",
          affiliation: (
            <Link component="span" onClick={() => setPageName("college")}>
              St. Healmore Medical College
            </Link>
          ),
          firstAppearance: "Student Records - Batch 2008",
          address:
            "Flat 3A, Doctor's Residency,\nHealth Sector 4,\nHeartline Road,\nRedmarsh",
          image: directorImg,
          bio: (
            <>
              Dr. Arjun Verma is a renowned neurologist known for his
              groundbreaking work in neuroplasticity. He was one of the top
              alumni from St. Healmore Medical College and now mentors young
              doctors across Zorik. He is a frequent speaker at conferences and
              an advocate for mental health policy reform. He also co-founded
              NeuroAid, an initiative for early detection of neurological
              disorders.
            </>
          ),
          // TODO: blink this section if the flag is found
          items: (
            flagFound && (
            <div>
              <Typography variant="subtitle2">Documents found</Typography>
              <ul>
                <li><ViewImage image={complaintLetter1} label="Letters from Ward staff complaining about staff shortages." /></li>
                {/* <li><ViewImage image={image2} label="Letter from Juan Martinez regarding suspicion of Organ Trafficking." /></li> */}
                {/* <li><ViewImage image={image3} label="Organ Request Forms." /></li> */}
              </ul>
            </div>
          )),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
