import AutopsyReport from "../components/Autopsy";
import BirthCertificate from "../components/BirthCertificate";
import CheckinRegistry from "../components/CheckinRegistry";
import DeathCertificate from "../components/DeathCertificate";
import EmploymentRecordSheetReadOnly from "../components/EmplymentForm";

export default function Hospital({setPageName}){
    return(
        <>
        <DeathCertificate
  fullName="Jane Eleanor Smith"
  dateOfBirth="March 12, 1975"
  dateOfDeath="July 30, 2025"
  placeOfDeath="Pune, Maharashtra"
  causeOfDeath="Cardiac Arrest"
  certificateNumber="DC-2025-887766"
  registrar="Office of the Civil Registrar"
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



        </>
    )
}