import RecordsList from "../../components/RecordsList";
import { ADDRESS, LOGOS } from "../../consts";
import weaponRecords from "../../assets/weapon_reports.json";
import { getGridDateOperators } from "@mui/x-data-grid";

const weaponRegistryColumns = [
  { field: "licenseNumber", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "weaponType", headerName: "Weapon Type", flex: 1 },
  { field: "serialNumber", headerName: "Serial Number", flex: 1 },
  {
    field: "issueDate",
    headerName: "Issue Date",
    flex: 1,
    valueGetter: (params) => new Date(params),
    type: "date",
    filterOperators: getGridDateOperators(),
  },
];

export default function WeaponRegistry({ setPageName }) {
  return (
    <RecordsList
      columns={weaponRegistryColumns}
      records={weaponRecords}
      type="weapon"
      Label="Weapon Registry"
      companyName="Redmarsh Police Department"
      companyAddress={ADDRESS.police}
      companyLogo={LOGOS.police}
      setPageName={setPageName}
      goTo="police"
    />
  );
}
