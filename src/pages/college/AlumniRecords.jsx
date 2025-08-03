import { Link, Typography } from "@mui/material";
import AlumniStudentsList from "../../components/AlumniList";
import TerminatedStudentsList from "../../components/TerminationList";
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
        alumni={[
          {
            name: "Dr. Anjali Mehta",
            rollNumber: "MD2016-012",
            degree: "MBBS",
            batch: "2016",
            graduationYear: "2021",
            specialization: "Cardiology",
            currentEmployment: "Consultant, Apollo Hospitals",
          },
          {
            name: "Dr. Rahul Singh",
            rollNumber: "MD2015-034",
            degree: "BDS",
            batch: "2015",
            graduationYear: "2020",
            specialization: "Oral Surgery",
            currentEmployment: "Private Practice, Delhi",
          },
          {
            name: "Dr. Farah Khan",
            rollNumber: "MD2017-021",
            degree: "MBBS",
            batch: "2017",
            graduationYear: "2022",
            specialization: "Pediatrics",
            currentEmployment: "Resident, NIMS Hospital",
          },
        ]}
      />
    </div>
  );
}
