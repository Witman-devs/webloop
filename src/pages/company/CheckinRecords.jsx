import VisitorRegistry from "../../components/ReceptionRegistry";
import { ADDRESS, LOGOS, PAGE_TITLES } from "../../consts";
import visitorRecords from "../../assets/checkin_records.json";

const GenricoVisitorRecords = visitorRecords.filter((val)=>val.place=="Generico")

export default function CheckinRecords({setPageName}){
    return (
        <VisitorRegistry 
            companyName={PAGE_TITLES.company}
            companyAddress={ADDRESS.company}
            companyLogo={LOGOS.company}
            records={GenricoVisitorRecords}
            setPageName={setPageName}
            goTo="company"
        />
    )
}

