import RecordsList from "../../components/RecordsList";
import { ADDRESS, LOGOS } from "../../consts";
import deathRecord from "../../assets/death_records.json";
  
const rows = deathRecord.map((item) => ({
  ...item,
  dateOfDeath: new Date(item.dateOfDeath),
}));

const deathCertificateColumns = [
  { field: "certificateNumber", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Name", flex: 1 },
  { field: "doctor", headerName: "Doctor", flex: 1 },
  { field: "dateOfDeath", headerName: "Date of Death", width: 140 },
  { field: "placeOfDeath", headerName: "Place", width: 140 },
  { field: "causeOfDeath", headerName: "Reason", flex: 1 },
  { field: "age", headerName: "Age", width: 120, type: "number" },
];

export default function deathRecords({ setPageName }) {
  return (
    <RecordsList
      records={deathRecord}
      columns={deathCertificateColumns}
      type="death"
      companyName="Redmarsh Healthcare"
      companyAddress={ADDRESS["hospital"]}
      companyLogo={LOGOS["hospital"]}
      setPageName={setPageName}
      goTo="hospital"
    />
  );
}
