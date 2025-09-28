import { Link } from "@mui/material";
import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";

export default function Company({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["company"]}
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
          { 
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("ceo");
                }}
              >
                Mr. James Anderson
              </Link>
            ),
            role: "Cheif Executive Officer",
          },
          { 
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("angelina");
                }}
              >
                Ms. Angelina Grimes
              </Link>
            ),
            role: "Cheif Operations Officer",
          },
        ]}
        history="Founded in 1998, Generico Pharmaceutical began as a small formulation lab focused on essential generics. Over the years, it has grown into a globally recognized pharmaceutical company serving markets across more than 30 countries."
        contact={{
          address: ADDRESS["company"],
          email: "contact@industech.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Employee Records", pageName: "genricoEmployeeRecords" },
          { label: "Checkin Records", pageName: "genricoCheckinRecords" }
        ]}
      />

    </>
  );
}
