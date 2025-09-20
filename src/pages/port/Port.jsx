import OrganizationWiki from "../../components/OrganizationWiki";
import VisitorRegistry from "../../components/ReceptionRegistry";


export default function Port({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        name="IndusTech Internaltional Medical college"
        description="The Port Authority serves as a vital gateway for international trade, commerce, and maritime logistics. Strategically located and fully equipped with modern infrastructure, the port handles the efficient movement of cargo, vessels, and personnel with precision and safety. From containerized goods to bulk shipments, it supports a wide range of industries while maintaining strict regulatory and environmental standards. Operated by a team of skilled professionals and backed by advanced technology, the port plays a critical role in connecting global supply chains and supporting regional economic growth."
        departments={[
            "Harbor Operations", 
            "Cargo Handling & Logistics", 
            "Customs & Security", 
            "Marine Services", 
            "Terminal Management"
        ]}
        keyPeople={[
          { name: "Dr. Elira Koven", role: "Director" },
          { name: "Dr. Marcus Vel", role: "Chief Medical Officer" },
        ]}
        history="Established in 1974, we began as a modest coastal dock serving domestic cargo. Today, it stands as a major international seaport with state-of-the-art terminals and a growing global footprint."
        contact={{
          address: "1 Archive Lane, Velora, Astriva",
          email: "contact@industech.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Admission Records", pageName: "admissionRecords" },
          { label: "Faculty Records", pageName: "facultyRecords" }
        ]}
      />



      <VisitorRegistry
        companyName="Red Cross Medical Corp"
        companyAddress="123 Wellness Road, Pune - 411001"
        companyLogo="https://via.placeholder.com/80"
        records={visitorRecords}
      /> 
      

    </>
  );
}

const visitorRecords = [
  {
    time: "09:10 AM",
    name: "Dr. Smith",
    purpose: "Meeting",
    contact: "555-1234",
    comment: "Discussed medical supplies",
    signature: "Dr. S",
  },
  {
    time: "11:45 AM",
    name: "Emily Johnson",
    purpose: "Delivery",
    contact: "555-4567",
    comment: "Package from courier",
    signature: "EJ",
  },
  {
    time: "03:20 PM",
    name: "Inspector Ravi",
    purpose: "Inspection",
    contact: "555-7890",
    comment: "Routine check",
    signature: "Ravi",
  },
];
