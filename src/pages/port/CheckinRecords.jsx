import VisitorRegistry from "../../components/ReceptionRegistry";
import { ADDRESS, LOGOS, PAGE_TITLES } from "../../consts";
import visitorRecords from "../../assets/checkin_records.json";

const portVisitorRecords = visitorRecords.filter((val)=>val.place=="Redmarsh Postal Services")

export default function CheckinRecords({setPageName}){
    return (
        <VisitorRegistry 
            companyName={PAGE_TITLES.port}
            companyAddress={ADDRESS.port}
            companyLogo={LOGOS.port}
            records={portVisitorRecords}
            setPageName={setPageName}
            goTo="port"
        />
    )
}

