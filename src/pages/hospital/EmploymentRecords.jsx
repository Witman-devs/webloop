import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", width: 80 },
];

export default function EmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={EmploymentRecord}
      columns={employmentCertificateColumns}
      type="employee"
    />
  );
}
