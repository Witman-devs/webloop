import { Link } from "@mui/material";
import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";

export default function PoliceOffice({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["police"]}
        name="Redmarsh Police Department"
        description="The Police Department believes in strict enforcement of law thereby promoting safety, stability and justice within our community. Our mission has always been to preserve legal order, and serve the public. Through preemptive patrolling, arduous training, and a deep sense of civic duty, we are well prepared to swiftly respond to emergencies. We strongly believe in justice and strive to ensure that justice is delivered with fairness and respect and maintain peace among the masses. We are committed to building a safer environment for each and every citizen."
        departments={[
          "Patrol Division",
          "Criminal Investigation Department",
          "Cybercrime Unit",
          "Crime Intelligence Unit",
          "Narcotics Division",
          "Anti-Terrorism Unit"
        ]}
        keyPeople={[
          { 
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("inspector");
                }}
              >
                Olive Harris
              </Link>
            ),
            role: "Inspector",
          },
          { 
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("victim2");
                }}
              >
                Mark Sullivan
              </Link>
            ),
            role: "Inspector",
          },
        ]}
        history="Established in 1995, we continuously strive to protect people and maintain peace thereby foster a sense of responsibility and safety among the civilians."
        contact={{
          address: ADDRESS["police"],
          email: "contact@redmarshpolice.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Admission Records", pageName: "admissionRecords" },
          { label: "Faculty Records", pageName: "facultyRecords" }
        ]}
      />


{/*


      <VisitorRegistry
        companyName="Red Cross Medical Corp"
        companyAddress="123 Wellness Road, Pune - 411001"
        companyLogo="https://via.placeholder.com/80"
        records={visitorRecords}
      /> */}
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
