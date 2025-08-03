import RecordsList from "../../components/RecordsList";
import birthRecords from "../../assets/birth_records.json"
import { ADDRESS, LOGOS } from "../../consts";

const birthCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "childName", headerName: "Name", flex: 1 },
  { field: "dateOfBirth", headerName: "Date of Birth", width: 140 },
  { field: "motherName", headerName: "Mother", flex: 1 },
  { field: "fatherName", headerName: "Father", flex: 1 },
  { field: "timeOfBirth", headerName: "Time of Birth", flex: 1 },
];

export default function BirthRecords({ setPageName }) {
  return (
    <RecordsList
      records={birthRecords}
      columns={birthCertificateColumns}
      type="birth"
      Label="Birth Records"
      companyName="Redmarsh Healthcare"
      companyAddress={ADDRESS["hospital"]}
      companyLogo={LOGOS["hospital"]}
      setPageName={setPageName}
      
    />
  );
}
