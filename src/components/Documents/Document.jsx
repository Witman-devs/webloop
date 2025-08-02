import DeathCertificate from "./DeathCertificate";
import BirthCertificate from "./BirthCertificate";
import AutopsyReport from "./Autopsy";
import EmploymentRecord from "./EmplymentRecord";


export default function Document({type, data}){
  switch (type) {
    case "death":
      return <DeathCertificate {...data} />;

    case "birth":
      return <BirthCertificate {...data} />;

    case "autopsy":
      return <AutopsyReport {...data} />;

    case "employee":
      return <EmploymentRecord {...data} />;

    default:
      return <div>Unsupported document type: {type}</div>;
  }
}