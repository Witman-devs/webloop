import { Link } from "@mui/material";
import OrganizationWiki from "../../components/OrganizationWiki";
import { ADDRESS, LOGOS } from "../../consts";

export default function NewsAgency({ setPageName }) {
  return (
    <>
      <OrganizationWiki
        logo={LOGOS["news"]}
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
          {
            name: (
              <Link
                component="span"
                onClick={() => {
                  setPageName("victim3");
                }}
              >
                Michael Thompson
              </Link>
            ),
            role: "Investigative Reporter", 
          },
        ]}
        history="Founded in 1982, Atlas News Agency began as a small regional outlet with a vision to deliver honest and impactful journalism. Over the decades, it has grown into a globally recognized source for reliable news, trusted by millions around the world."
        contact={{
          address: ADDRESS["news"],
          email: "contact@atlas.org",
          phone: "+123 456 7890",
        }}
        setPageName={setPageName}
        pages={[
          { label: "News Archivals", pageName: "newsArchive" }
        ]}
      />


    </>
  );
}

