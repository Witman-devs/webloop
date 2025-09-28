import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";
import { ADDRESS, LOGOS } from "../../consts";

const GenricoEmployees = EmploymentRecord.filter(record=> record.company === "Generico")

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", flex:1 },
];

export default function GenricoEmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={GenricoEmployees}
      columns={employmentCertificateColumns}
      type="employee"
      companyName="Generico"
      companyLogo={LOGOS.company}
      companyAddress={ADDRESS.company}
      setPageName={setPageName}
      goTo="company"
    />
  );
}
