import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";
import { ADDRESS, LOGOS } from "../../consts";

const hospitalEmployees = EmploymentRecord.filter(record=> record.company === "Redmarsh Healthcare")

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", flex:1 },
];

export default function HospitalEmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={hospitalEmployees}
      columns={employmentCertificateColumns}
      type="employee"
      companyName="Redmarsh Healthcare"
      companyLogo={LOGOS.hospital}
      companyAddress={ADDRESS.hospital}
    />
  );
}
