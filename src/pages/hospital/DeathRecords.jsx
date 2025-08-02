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
