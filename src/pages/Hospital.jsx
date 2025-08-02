import AutopsyReport from "../components/Autopsy";
import BirthCertificate from "../components/BirthCertificate";
import CheckinRegistry from "../components/CheckinRegistry";
import DeathCertificate from "../components/DeathCertificate";
import DeathRecordsGrid from "../components/DeathCertificateList";
import EmploymentRecordSheetReadOnly from "../components/EmplymentRecord";
import VisitorRegistry from "../components/ReceptionRegistry";

const dummyRecords = [
  {
    id: 1,
    fullName: "John Doe",
    dateOfDeath: "2024-11-12",
    placeOfDeath: "Pune General Hospital",
    age: 72,
    causeOfDeath: "Cardiac Arrest",
    issuedBy: "Registrar of Deaths",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    dateOfDeath: "2025-03-08",
    placeOfDeath: "Mumbai Medical Center",
    age: 58,
    causeOfDeath: "Respiratory Failure",
    issuedBy: "City Health Department",
  },
  // Add more
];

const deathCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "dateOfDeath", headerName: "Date of Death", width: 140 },
  { field: "placeOfDeath", headerName: "Place", flex: 1 },
  { field: "age", headerName: "Age", width: 80 },
];

export default function Hospital({ setPageName }) {
  return (
    <>
      <DeathRecordsGrid
        records={dummyRecords}
        columns={deathCertificateColumns}
        type="death"
      />

      <BirthCertificate
        childName="Saanvi Mehra"
        dateOfBirth="August 2, 2025"
        timeOfBirth="11:15 AM"
        gender="Female"
        placeOfBirth="Delhi, India"
        fatherName="Arun Mehra"
        motherName="Nisha Mehra"
        certificateNumber="BC-2025-901234"
        registrar="Office of the Civil Registrar"
      />
      
      <AutopsyReport
        caseNumber="AUT-2025-0112"
        name="Siddharth Verma"
        age="32"
        gender="Male"
        dateOfDeath="July 28, 2025"
        dateOfExamination="July 29, 2025"
        examiner="Dr. Neha Raut"
        location="Govt Medical College, Nagpur"
        causeOfDeath="Gunshot wound to chest"
        findings={`- Entry wound at 3rd intercostal space, midclavicular line\n- No exit wound found\n- Bullet lodged near T4 vertebra\n- No signs of struggle\n- Alcohol detected in blood`}
        conclusion="Cause of death is consistent with homicidal firearm injury."
      />

      <EmploymentRecordSheetReadOnly
        fullName="Manoj Tiwari"
        dob="June 15, 1998"
        contact="+91-9876543210"
        email="manoj.tiwari@example.com"
        address="D/402, Shree Heights, Borivali West, Mumbai"
        qualification="MBBS in Computer Science"
        university="University of medical"
        yearOfPassing="2020"
        specialRequest="Requires flexible working hours new child born."
        needStaffQuarter={false}
        companyLogo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        companyAddress={{
          name: "RC Hospital",
          lines: "123 Medi Street\nSolar Farms, ZB 904107\nZorik",
        }}
      />
      <CheckinRegistry
        companyLogo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        companyAddress={{
          name: "RC Hospital",
          lines: "123 Medi Street\nSolar Farms, ZB 904107\nZorik",
        }}
        entries={[
          {
            name: "Manoj Tiwari",
            checkinTime: "2025-08-02 10:15 AM",
            purpose: "Check-in",
            contact: "+91-9876543210",
          },
          {
            name: "Jane Doe",
            checkinTime: "2025-08-02 11:00 AM",
            purpose: "Check-in",
            contact: "+1-202-555-0143",
          },
        ]}
      />

      <VisitorRegistry
        companyName="Red Cross Medical Corp"
        companyAddress="123 Wellness Road, Pune - 411001"
        companyLogo="https://via.placeholder.com/80"
        records={visitorRecords}
      />
    </>
  );
}

const visitorRecords = [
  {
    time: "09:10 AM",
    name: "Dr. Smith",
    purpose: "Meeting",
    contact: "555-1234",
    comment: "Discussed medical supplies",
    signature: "Dr. S",
  },
  {
    time: "11:45 AM",
    name: "Emily Johnson",
    purpose: "Delivery",
    contact: "555-4567",
    comment: "Package from courier",
    signature: "EJ",
  },
  {
    time: "03:20 PM",
    name: "Inspector Ravi",
    purpose: "Inspection",
    contact: "555-7890",
    comment: "Routine check",
    signature: "Ravi",
  },
];
