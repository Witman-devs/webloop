import TerminatedStudentsList from "../../components/TerminationList";
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
      students={[
        {
          name: "Ravi Kumar",
          rollNumber: "MD2021-041",
          batch: "2021",
          degree: "MBBS",
          reason: "Academic dishonesty",
          terminationDate: "2025-06-18",
        },
        {
          name: "Priya Sharma",
          rollNumber: "MD2020-017",
          batch: "2020",
          degree: "MBBS",
          reason: "Multiple unexcused absences",
          terminationDate: "2024-11-03",
        },
        {
          name: "Yusuf Patel",
          rollNumber: "MD2022-055",
          batch: "2022",
          degree: "BDS",
          reason: "Code of conduct violation",
          terminationDate: "2025-02-21",
        },
      ]}
    />
  );
}
