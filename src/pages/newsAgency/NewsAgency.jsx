import OrganizationWiki from "../../components/OrganizationWiki";


export default function NewsAgency({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        name="Atlas News Agency"
        description="Atlas News Agency is a trusted voice in global journalism, committed to delivering accurate, timely, and insightful reporting across a wide spectrum of topics. From breaking news and in-depth investigations to international affairs and human interest stories, Atlas stands at the intersection of truth and relevance. With a network of dedicated correspondents and analysts around the world, we bring clarity to complex issues and give a voice to the stories that matter. Grounded in integrity, driven by facts, and powered by a passion for storytelling, Atlas News Agency is your reliable window to the world"
        departments={[
            "News Desk",
            "Reporting",
            "Editing",
            "Investigative Journalism",
            "Features & Human Interest",
            "Foreign / International Desk"
        ]}
        keyPeople={[
          { name: "Dr. Elira Koven", role: "Director" },
          { name: "Dr. Marcus Vel", role: "Chief Medical Officer" },
        ]}
        history="Founded in 1982, Atlas News Agency began as a small regional outlet with a vision to deliver honest and impactful journalism. Over the decades, it has grown into a globally recognized source for reliable news, trusted by millions around the world."
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
