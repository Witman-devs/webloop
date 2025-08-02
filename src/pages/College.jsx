import AlumniStudentsList from "../components/AlumniList";
import TerminatedStudentsList from "../components/TerminationList";

export default function College({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
        <Typography variant="h2">College of medical</Typography>
      <AlumniStudentsList
        collegeLogo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        collegeAddress={{
          name: "St. Healmore Medical College",
          lines: "245 Doctor's Avenue\nHyderabad, Telangana, India",
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

      <TerminatedStudentsList
        collegeLogo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        collegeAddress={{
          name: "St. Healmore Medical College",
          lines: "245 Doctor's Avenue\nHyderabad, Telangana, India",
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
    </div>
  );
}
