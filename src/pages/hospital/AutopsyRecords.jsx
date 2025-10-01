import RecordsList from "../../components/RecordsList";
import autopsyRecordsData from "../../assets/autopsy_reports.json";
import { ADDRESS, LOGOS } from "../../consts";
import { getGridDateOperators } from "@mui/x-data-grid";

const autopsyCertificateColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "dateOfDeath",
    headerName: "Date of Death",
    width: 140,
    valueGetter: (params) => new Date(params),
    type: "date",
    filterOperators: getGridDateOperators(),
  },
  { field: "location", headerName: "Place", flex: 1 },
  { field: "age", headerName: "Age", width: 80 },
];

export default function autopsyRecords({ setPageName }) {
  return (
    <RecordsList
      records={autopsyRecordsData}
      columns={autopsyCertificateColumns}
      type="autopsy"
      Label="Autopsy Records"
      companyName="Redmarsh Healthcare"
      companyAddress={ADDRESS["hospital"]}
      companyLogo={LOGOS["hospital"]}
      setPageName={setPageName}
      goTo="hospital"
    />
  );
}
