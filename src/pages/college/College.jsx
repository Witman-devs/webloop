import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";


export default function College({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["college"]}
        name="St. Healmore Medical college"
        description="St. Healmore Medical college started with an aim to impart quality education in the field of medical sciences, dedicated to shaping the next generation of healthcare leaders. With a strong emphasis on hands-on learning, research, and community outreach, we empower students with the knowledge, skills, and compassion needed to serve patients with integrity and care. Our distinguished faculty, modern infrastructure, and affiliations with top hospitals provide a dynamic environment where science meets service, and learning leads to healing."
        departments={[
          "Anatomy",
          "Biochemistry",
          "Pharmacology",
          "Microbiology",
          "ENT",
          "Medicine",
          "OBGYN",
          "Radiology"
        ]}
        keyPeople={[
          { name: "Dr. Elira Verma", role: "Principal" },
          { name: "Dr. Marcus Vel", role: "Vice Principal" },
        ]}
        history="Established in 1978, we bgean with a batch of 20 students across 5 classes each and a faculty strength of 15 doctors. We have increased our capacity to 120 students per class and a faculty strength of 78 expert doctors imparting quality education."
        contact={{
          address: ADDRESS["college"],
          email: "contact@healmore.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Alumni Records", pageName: "alumniRecords" },
          { label: "Termination Records", pageName: "terminationRecords" }
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
