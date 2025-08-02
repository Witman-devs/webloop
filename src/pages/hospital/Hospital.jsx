import OrganizationWiki from "../../components/OrganizationWiki";


export default function Hospital({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        name="Zerica Medical Institution"
        description="Founded in 1902, Zerica Medical Institution is a leading research and clinical practice center based in Astriva."
        departments={[
          "General Medicine",
          "Cardiology",
          "Neurology",
          "Forensics",
          "Pediatrics",
        ]}
        keyPeople={[
          { name: "Dr. Elira Koven", role: "Director" },
          { name: "Dr. Marcus Vel", role: "Chief Medical Officer" },
        ]}
        history="Established in the early 20th century, Zerica Medical Institution has played a vital role in advancing public health in Astriva. Known for pioneering medical procedures and research, it serves both as a teaching hospital and innovation hub."
        contact={{
          address: "1 Archive Lane, Velora, Astriva",
          email: "contact@zerica.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Birth Records", pageName: "birthRecords" },
          { label: "Death Records", pageName: "deathRecords" },
          { label: "Autopsy Records", pageName: "autopsyRecords" },
          { label: "Employement Records", pageName: "employementRecordsHospital" },
          { label: "Reception Register", pageName: "receptionRegisterHostpital" },
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
