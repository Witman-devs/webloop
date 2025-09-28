import { Link } from "@mui/material";
import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";

export default function Company({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["chemicals"]}
        name="Redmarsh Chemicals"
        description="Redmarsh Chemicals is a leading global company specializing in the research, development, and manufacturing of advanced chemical compounds and materials. Known for its cutting-edge innovations in pharmaceuticals, industrial chemicals, and specialty compounds, Redmarsh Chemicals serves clients in healthcare, manufacturing, agriculture, and technology sectors. The company prides itself on blending rigorous scientific expertise with strategic industry insight to deliver solutions that drive progress while sometimes operating in the shadows where few dare to tread."
        departments={[
          "Research & Development (R&D)",
          "Production & Manufacturing",
          "Quality Control & Safety",
          "Sales & Marketing",
          "Corporate Strategy & Finance",
          "Security & Compliance",
        ]}
        keyPeople={[
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("chemCeo");
                }}
              >
                Molly Sanford
              </Link>
            ),
            role: "Chief Executive Officer",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("chemEng");
                }}
              >
                Sandy Harris
              </Link>
            ),
            role: "Chemical Engineer",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("alonzo");
                }}
              >
                Alonzo McEnzie
              </Link>
            ),
            role: "Businessman",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("van");
                }}
              >
                Van Swift
              </Link>
            ),
            role: "Businessman",
          },
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("ivan");
                }}
              >
                Ivan Lofer
              </Link>
            ),
            role: "Accountant",
          },
        ]}
        history="Founded in the early 1980s by a group of visionary chemists, Redmarsh Chemicals began as a small specialty chemical supplier serving local laboratories and hospitals. Over the decades, the company grew rapidly, fueled by breakthrough research and strategic acquisitions that expanded its portfolio into pharmaceuticals and industrial chemicals."
        contact={{
          address: ADDRESS["chemicals"],
          email: "contact@redmarshchem.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "Employment Records", pageName: "chemEmployeeRecords" },
          { label: "Checkin Records", pageName: "chemCheckinRecords" },
        ]}
      />
    </>
  );
}
