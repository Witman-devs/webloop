import TerminatedStudentsList from "../../components/TerminationList";
import terminatedStudents  from "../../assets/college/terminated_students.json";
import { ADDRESS, LOGOS } from "../../consts";

export default function TerminationRecords({ setPageName }) {
  return (
    <TerminatedStudentsList
      setPageName={setPageName}
      collegeLogo={LOGOS["college"]}
      collegeAddress={{
        name: "St. Healmore Medical College",
        lines: ADDRESS["college"],
      }}
      students={terminatedStudents}
    />
  );
}
