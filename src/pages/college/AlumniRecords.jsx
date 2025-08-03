import alumniRecords from "../../assets/college/alumniRecords.json";
import AlumniStudentsList from "../../components/AlumniList";
import { ADDRESS, LOGOS } from "../../consts";

export default function AlumniRecords({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <AlumniStudentsList
        setPageName={setPageName}
        collegeLogo={LOGOS["college"]}
        collegeAddress={{
          name: "St. Healmore Medical College",
          lines: ADDRESS["college"],
        }}
        alumni={alumniRecords}
      />
    </div>
  );
}
