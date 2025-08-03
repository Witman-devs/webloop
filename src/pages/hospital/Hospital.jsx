import { Link } from "@mui/material";
import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";

export default function Hospital({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["hospital"]}
        name="Redmarsh Healthcare"
        description="Red Marsh Hospital has been acknowledged globally as the centre of excellence. Known for its meticulous patient care by highly experienced medical staff, extensive medical research, advanced surgical facilities and a dedicated community service. Red Marsh is committed to delivering compassionate, world-class healthcare to patients from around the world. Red Marsh hospital strives to build a legacy of unmatched trust with its patients, lead in the field of innovation, and achieve unerring clinical precision."
        departments={[
          "General Medicine",
          "Cardiology",
          "Neurology",
          "Forensics",
          "Pediatrics",
          "OBGyn",
        ]}
        keyPeople={[
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("doc2");
                }}
              >
                Dr. Rohan Mehta
              </Link>
            ),
            role: "Director",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("director");
                }}
              >
                Dr. Arjun Verma
              </Link>
            ),
            role: "Ex-Director",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("doc1");
                }}
              >
                Dr. Juan Martinez
              </Link>
            ),
            role: "Ex-Chief Medical Officer",
          },
          
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("doc3");
                }}
              >
                Dr. John Carter
              </Link>
            ),
            role: "Optometrist",
          },
          
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("ward");
                }}
              >
                Samuel Robert Hayes
              </Link>
            ),
            role: "Ward Attendant",
          },
        ]}
        history="Established in 1962, we began with 15 doctors and housing 20 beds. Today, we have increased our capacity several fold and have a total of 300 beds and 15 Operation Theatres with specialized infrastructure, and nearly 1,800 employees."
        contact={{
          address: ADDRESS["hospital"],
          email: "contact@zerica.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Birth Records", pageName: "birthRecords" },
          { label: "Death Records", pageName: "deathRecords" },
          { label: "Autopsy Records", pageName: "autopsyRecords" },
          {
            label: "Employment Records",
            pageName: "employementRecordsHospital",
          },
          {
            label: "Reception Register",
            pageName: "receptionRegisterHostpital",
          },
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
