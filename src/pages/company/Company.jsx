import OrganizationWiki from "../../components/OrganizationWiki";


export default function Company({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        name="Generico Pharmaceutical company"
        description="Generico Pharmaceutical is a trusted name in the healthcare sector, dedicated to the development, manufacturing, and distribution of high-quality, affordable medicines. With a commitment to innovation and global health, Generico focuses on producing a wide range of generic drugs that meet international standards of safety, efficacy, and compliance."
        departments={[
            "Formulation Development",
            "Analytical R&D",
            "Bioequivalence / Clinical Trials",
            "Production",
            "Quality Assurance (QA)",
            "Quality Control (QC)",
            "Packaging & Labeling"
        ]}
        keyPeople={[
          { name: "Dr. Elira Koven", role: "Director" },
          { name: "Dr. Marcus Vel", role: "Chief Medical Officer" },
        ]}
        history="Founded in 1998, Generico Pharmaceutical began as a small formulation lab focused on essential generics. Over the years, it has grown into a globally recognized pharmaceutical company serving markets across more than 30 countries."
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
