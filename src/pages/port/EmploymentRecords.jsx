import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";
import { ADDRESS, LOGOS } from "../../consts";

const portEmployees = EmploymentRecord.filter(record=> record.company === "Redmarsh Postal Services")

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", flex:1 },
];

export default function PortEmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={portEmployees}
      columns={employmentCertificateColumns}
      type="employee"
      companyName="Redmarsh Postal Services Port Division"
      companyLogo={LOGOS.port}
      companyAddress={ADDRESS.port}
      setPageName={setPageName}
      goTo="port"
    />
  );
}
