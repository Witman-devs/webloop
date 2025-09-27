import VisitorRegistry from "../../components/ReceptionRegistry";
import { ADDRESS, LOGOS, PAGE_TITLES } from "../../consts";
import visitorRecords from "../../assets/checkin_records.json";

const hospitalVisitorRecords = visitorRecords.filter((val)=>val.place=="Redmarsh Healthcare")

export default function CheckinRecords({setPageName}){
    return (
        <VisitorRegistry 
            companyName={PAGE_TITLES.hospital}
            companyAddress={ADDRESS.hospital}
            companyLogo={LOGOS.hospital}
            records={hospitalVisitorRecords}
            setPageName={setPageName}
            goTo="hospital"
        />
    )
}


// const visitorRecords = [
//   {
//     time: "09:10 AM",
//     name: "Dr. Smith",
//     purpose: "Meeting",
//     contact: "555-1234",
//     comment: "Discussed medical supplies",
//     signature: "Dr. S",
//   },
//   {
//     time: "11:45 AM",
//     name: "Emily Johnson",
//     purpose: "Delivery",
//     contact: "555-4567",
//     comment: "Package from courier",
//     signature: "EJ",
//   },
//   {
//     time: "03:20 PM",
//     name: "Inspector Ravi",
//     purpose: "Inspection",
//     contact: "555-7890",
//     comment: "Routine check",
//     signature: "Ravi",
//   },
// ];
