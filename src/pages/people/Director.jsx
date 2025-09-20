import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/director.png";
import complaint1 from "../../assets/Notes/complaint1.png";
import complaint1Txt from "../../assets/Notes/complaint1.txt";
import complaint2 from "../../assets/Notes/complaint2.png";
import complaint2Txt from "../../assets/Notes/complaint2.txt";
import LetterFromJuan from "../../assets/Notes/LetterFromJuan.png";
import LetterFromJuanTxt from "../../assets/Notes/LetterFromJuan.txt";
import ViewOrganRequest from "../../components/ViewOrganRequest.jsx";
import LetterViewer from "../../components/LetterViewer.jsx";
import "../../index.css"; // Ensure styles are imported


export default function Director({ setPageName }) {
  const flagFound = localStorage.getItem("flaggedStudent") === "Cletus Raj Blick";

  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative", padding: "2vw" }}>
      <ProfileCard
        person={{
          name: "Dr. Cletus Blick",
          fullName: "Cletus Raj Blick",
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
              Dr. Cletus Blick is a renowned neurologist known for his
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
            <div className="blink">
              <Typography variant="subtitle2">Documents found</Typography>
              <ul>
                <li><LetterViewer image={complaint1} fileSrc={complaint1Txt} label="Letters from Ward staff complaining about staff shortages." /></li>
                <li><LetterViewer image={complaint1} fileSrc={complaint1Txt} label="Letters from Ward staff complaining about Malfunctioning Equipments." /></li>
                <li><LetterViewer image={LetterFromJuan} fileSrc={LetterFromJuanTxt} label="Letter from Juan Martinez regarding suspicion of Organ Trafficking." /></li>
                <li><ViewOrganRequest /></li>
              </ul>
            </div>
          )),
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
