import RecordsList from "../../components/RecordsList";
import { ADDRESS, LOGOS } from "../../consts";

const weaponRegistryColumns = [
  { field: "licenseNumber", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "dob", headerName: "Date of Birth", width: 140 },
  { field: "weaponType", headerName: "Mother", flex: 1 },
  { field: "serialNumber", headerName: "Father", flex: 1 },
  { field: "issueDate", headerName: "Time of Birth", flex: 1 },
];

export default function WeaponRegistry({ setPageName }) {
  return (
    <RecordsList
      columns={weaponRegistryColumns}
      records={{
        issuingAuthority: "New Avalon",
        licenseNumber: "AV-WPN-00721",
        name: "Victor Kade",
        dob: "January 12, 1981",
        address: "Sector 12B, Redstone District\nNew Avalon City, NA-44211",
        weaponType: "Handgun - Semi-automatic",
        serialNumber: "XD9-2041-NA",
        issueDate: "August 1, 2025",
        expiryDate: "August 1, 2030",
        issuedBy: "Marshal Elroy Wexler",
      }}
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
