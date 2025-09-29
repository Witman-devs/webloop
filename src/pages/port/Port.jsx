import OrganizationWiki from "../../components/OrganizationWiki";
import VisitorRegistry from "../../components/ReceptionRegistry";
import { ADDRESS, LOGOS } from "../../consts";


export default function Port({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS.port}
        name="Redmarsh Postal Services Port Division"
        description="The Port Authority serves as a vital gateway for international trade, commerce, and maritime logistics. Strategically located and fully equipped with modern infrastructure, the port handles the efficient movement of cargo, vessels, and personnel with precision and safety. From containerized goods to bulk shipments, it supports a wide range of industries while maintaining strict regulatory and environmental standards. Operated by a team of skilled professionals and backed by advanced technology, the port plays a critical role in connecting global supply chains and supporting regional economic growth."
        departments={[
            "Harbor Operations", 
            "Cargo Handling & Logistics", 
            "Customs & Security", 
            "Marine Services", 
            "Terminal Management"
        ]}
        keyPeople={[
          { name: "Ms. Elira Koven", role: "Director of Postal Services Port Division" },
          { name: "Mr. Marcus Vel", role: "Chief Operations Officer" },
        ]}
        history="Established in 1974, we began as a modest coastal dock serving domestic cargo. Today, it stands as a major international seaport with state-of-the-art terminals and a growing global footprint."
        contact={{
          address: ADDRESS.port,
          email: "contact@redmarshPostalPort.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Checkin Registry", pageName: "portCheckinRecords" },
          { label: "Employment Records", pageName: "portEmployeeRecords" }
        ]}
      />
      

    </>
  );
}
