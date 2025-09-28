import RecordsList from "../../components/RecordsList";
import EmploymentRecord from "../../assets/employment_records.json";
import { ADDRESS, LOGOS } from "../../consts";

const chemEmployees = EmploymentRecord.filter(record=> record.company === "Redmarsh Chemicals")

const employmentCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "qualification", headerName: "role", flex: 1 },
  { field: "email", headerName: "email", flex:1 },
];

export default function ChemEmploymentRecords({ setPageName }) {
  return (
    <RecordsList
      records={chemEmployees}
      columns={employmentCertificateColumns}
      type="employee"
      companyName="Redmarsh Chemicals"
      companyLogo={LOGOS.chemicals}
      companyAddress={ADDRESS.chemicals}
      setPageName={setPageName}
      goTo="chemicals"
    />
  );
}
