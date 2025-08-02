import WeaponLicenseCertificate from "../components/WeaponLicenseCertificate";

export default function Police({ setPageName }) {
  return (
    <WeaponLicenseCertificate
      data={{
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
    />
  );
}
