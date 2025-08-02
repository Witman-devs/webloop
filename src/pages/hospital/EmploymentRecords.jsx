import RecordsList from "../../components/RecordsList";

const deathCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "dateOfDeath", headerName: "Date of Death", width: 140 },
  { field: "placeOfDeath", headerName: "Place", flex: 1 },
  { field: "age", headerName: "Age", width: 80 },
];

export default function deathRecords({ setPageName }) {
  return (
    <RecordsList
      records={dummyRecords}
      columns={deathCertificateColumns}
      type="death"
    />
  );
}


/*

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
      
      */