import VisitorRegistry from "../../components/ReceptionRegistry";
import { ADDRESS, LOGOS, PAGE_TITLES } from "../../consts";
import visitorRecords from "../../assets/checkin_records.json";

const chemVisitorRecords = visitorRecords.filter((val)=>val.place=="Redmarsh Chemicals")

export default function CheckinRecords({setPageName}){
    return (
        <VisitorRegistry 
            companyName={PAGE_TITLES.chemicals}
            companyAddress={ADDRESS.chemicals}
            companyLogo={LOGOS.chemicals}
            records={chemVisitorRecords}
            setPageName={setPageName}
            goTo="chemicals"
        />
    )
}

