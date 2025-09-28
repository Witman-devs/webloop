import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";
import { ADDRESS, LOGOS } from "../../consts";

const policeEmployees = EmploymentRecord.filter(record=> record.company === "Redmarsh Police Department")

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", flex:1 },
];

export default function PoliceEmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={policeEmployees}
      columns={employmentCertificateColumns}
      type="employee"
      companyName="Redmarsh Police Department"
      companyLogo={LOGOS.police}
      companyAddress={ADDRESS.police}
      setPageName={setPageName}
      goTo="police"
    />
  );
}
