import CompanyNewsCutoutList from "../../components/NewsList";

const sampleArticles = [
  {
    title: "Doctor hung himself out of guilt!",
    author: "Manoj Tiwari",
    date: "2004-08-12",
    category: "Technology",
    summary:
      "Dr. Juan Martinez found in staff quarter hung by a rope with suicide note saying he can't take this guilt of being reason for someones death. This is case from RedMarsh Healthcare, case is handled by Inspector Olive Harris. Hospital's Director Dr. Cletus Blick shows grief. Says he lost one of the best doctors at the hospital. He never made any mistake in past 5 years he was working for the hospital.",
  },
  {
    title: "New AI Model Revolutionizes Finance",
    author: "Manoj Tiwari",
    date: "2004-03-15",
    category: "Technology",
    summary:
      "Our latest AI breakthrough sets a new benchmark in automated trading and financial forecasting. The model leverages deep learning to analyze market trends, offering unprecedented accuracy and speed for institutional investors.",
  },
  {
    title: "Company Expands into Europe",
    author: "Elena Verma",
    date: "2004-03-12",
    category: "Business",
    summary:
      "We’ve announced new operations in Berlin and Amsterdam as part of our global expansion strategy. This move will allow us to better serve European clients and foster local partnerships in key markets.",
  },
  {
    title: "Employee Wellness Program Launched",
    author: "HR Team",
    date: "2004-03-05",
    category: "Culture",
    summary:
      "New mental health and fitness initiatives to improve employee well-being. The program includes free counseling, yoga sessions, and flexible work hours to support a healthy work-life balance.",
  },
  {
    title: "The Golden Mare by Majnubhai sold for wopping $4 Million",
    author: "Business Desk",
    date: "2005-03-22",
    category: "Business",
    summary:
      "A landmark bid for The Golden Mare, securing a $4 million at a painting auction. will this set new standards for paintings? James Anderson, Generico CEO, out bids Leroy Waelchi a well known financial advisor from neighbour country Zoltrok.",
  },
  {
    title: "Quarterly Profits Hit Record High",
    author: "Finance Desk",
    date: "2004-03-10",
    category: "Business",
    summary:
      "The company reported a 25% increase in quarterly profits, driven by strong sales in the Asia-Pacific region and successful product launches.",
  },
  {
    title: "Quarterly Profits Hit Record High",
    author: "Finance Desk",
    date: "2004-03-10",
    category: "Business",
    summary:
      "The company reported a 25% increase in quarterly profits, driven by strong sales in the Asia-Pacific region and successful product launches.",
  },
  
  {
    title: "Another doctor found mysteriously dead at RedMarsh Healthcare",
    author: "Michael Thompson",
    date: "2004-03-02",
    category: "Environment",
    summary:
      "Another doctor was found dead in the staff quarters, reportedly hung by a rope. While authorities suggest suicide, several details raise suspicion. The so-called suicide note is vague, and colleagues claim the doctor showed no signs of distress. This incident, again at RedMarsh Healthcare, is being investigated by Inspector Olive Harris. Hospital's Director Dr. Cletus Blick expressed shock. Was this truly a suicide, or is something more sinister happening at the hospital?",
  },
  {
    title: "Officer killed in a shootout on Redmarsh Port",
    author: "News Desk",
    date: "2005-02-1",
    category: "Events",
    summary:
      "Police Officer Mark Sullivan was killed in a shootout on theRedmarsh Port. Arrived in the nick of time,Inspector Olive Harris reported what happen at the port. He was able to injure one of the suspects. Mark Sullivan was able to kill one of the member of gang Ivan LoferThe case is being investigated by him. Authorities are searching for suspects and urge anyone with information to come forward",
  },
  {
    title: "Two Standout Sales at Redmarsh Art Auction Total $1 Million",
    author: "Communications Team",
    date: "2004-03-08",
    category: "Events",
    summary:
      "At the Redmarsh art auction, “Man Made Flower” sold for $500,000 to collector Dewey Kshlerin, while “Final Camp” also fetched $500,000, purchased by Yvonne Little.",
  },
  {
    title: "CEO Hosts Live Q&A with Customers",
    author: "Communications Team",
    date: "2004-03-08",
    category: "Events",
    summary:
      "Our CEO answered questions from customers in a live online session, discussing future plans and addressing feedback on recent products.",
  },
  {
    title: "Painting Prices Soar Amid Growing Demand",
    author: "John Doe",
    date: "2004-03-18",
    category: "Art",
    summary:
      "Art collectors and investors are seeing painting prices hike up rapidly this year. Experts attribute the surge to increased demand for contemporary works and limited supply at major auctions.",
  },
  {
    title: "Mobile App Update Adds New Features",
    author: "Dev Team",
    date: "2004-03-03",
    category: "Technology",
    summary:
      "The latest version of our mobile app introduces enhanced security, a redesigned dashboard, and improved notification controls.",
  },
  {
    title: "Reporter has been found dead in his apartment",
    author: "News Desk",
    date: "2005-02-06",
    category: "Events",
    summary:
      "A News reporter Michael Thompson was found dead in his apartment. The whole apartment was ransacked and destroyed, All the valuables are gone and lockers are empty. Officials say this could be a burglary turned into a tragic murder. While police is investigating. The news agency Atlas News Agency mourns the death of an excellent employee.",
  },
  {
    title: "Partnership Announced with Local Universities",
    author: "Outreach Office",
    date: "2004-03-11",
    category: "Education",
    summary:
      "We’ve partnered with leading universities to offer internships and research opportunities for students in data science and engineering.",
  },
  {
    title: "Charity Drive Raises $100,000 for Education",
    author: "CSR Team",
    date: "2004-03-14",
    category: "Community",
    summary:
      "Employees and partners raised funds to support educational programs for underprivileged children in rural areas.",
  },
  {
    title: "New Office Opens in Singapore",
    author: "Admin Team",
    date: "2004-03-06",
    category: "Business",
    summary:
      "The opening of our Singapore office marks a significant milestone in our Asia-Pacific growth strategy, providing better support for regional clients.",
  },
  {
    title: "Local artist hits high, sold his painting for 1.5 Millon",
    author: "Business Desk",
    date: "2004-12-22",
    category: "Business",
    summary:
      "Local Redmarsh artist stunned the community after his latest abstract painting sold for a staggering $1.5 million at a private auction.The record-breaking sale marks one of the highest prices ever paid for artwork in the city’s history. Bought by City mayor Randolph Reynolds",
  },
  {
    title: "Employee Spotlight: Innovator of the Month",
    author: "HR Team",
    date: "2004-03-17",
    category: "Culture",
    summary:
      "This month, we recognize Anjali Rao for her outstanding contributions to the AI research team and her leadership in mentoring new hires.",
  },
  {
    title: "Cybersecurity Awareness Training Rolled Out",
    author: "IT Security",
    date: "2004-03-09",
    category: "Technology",
    summary:
      "A new training program educates employees on best practices for data protection, phishing prevention, and secure remote work.",
  },
  {
    title: "Ballerina Sketch Sells for Record $2.5 Million at Redmarsh Auction",
    author: "Business Desk",
    date: "2004-12-22",
    category: "Business",
    summary:
      "A delicate sketch of a ballerina by a renowned Redmarsh artist fetched an astonishing $2.5 million at auction, hailed as a rare blend of elegance and timeless artistry. Aquired by Sergio Schroeder a renowned business man from city of atlantis",
  },
  {
    title: "Annual Tech Conference Scheduled for September",
    author: "Events Team",
    date: "2004-03-13",
    category: "Events",
    summary:
      "Our flagship tech conference will take place in September, featuring keynote speakers, workshops, and networking opportunities for industry professionals.",
  },
];

export default function NewsArchive({ setPageName }) {
  return <CompanyNewsCutoutList articles={sampleArticles} />;
}
