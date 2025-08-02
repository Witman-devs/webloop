import CompanyNewsCutoutList from "../components/NewsList";

const sampleArticles = [
  {
    title: "New AI Model Revolutionizes Finance",
    author: "Manoj Tiwari",
    date: "2024-03-15",
    category: "Technology",
    summary:
      "Our latest AI breakthrough sets a new benchmark in automated trading and financial forecasting. The model leverages deep learning to analyze market trends, offering unprecedented accuracy and speed for institutional investors.",
  },
  {
    title: "Company Expands into Europe",
    author: "Elena Verma",
    date: "2024-03-12",
    category: "Business",
    summary:
      "We’ve announced new operations in Berlin and Amsterdam as part of our global expansion strategy. This move will allow us to better serve European clients and foster local partnerships in key markets.",
  },
  {
    title: "Employee Wellness Program Launched",
    author: "HR Team",
    date: "2024-03-05",
    category: "Culture",
    summary:
      "New mental health and fitness initiatives to improve employee well-being. The program includes free counseling, yoga sessions, and flexible work hours to support a healthy work-life balance.",
  },
  {
    title: "Deal Struck for The Golden Mare for $2 Million",
    author: "Business Desk",
    date: "2024-03-22",
    category: "Business",
    summary:
      "A landmark agreement was finalized for The Golden Mare, securing a $2 million partnership. The deal is expected to open new opportunities for collaboration and growth in the luxury goods sector.",
  },
  {
    title: "Quarterly Profits Hit Record High",
    author: "Finance Desk",
    date: "2024-03-10",
    category: "Business",
    summary:
      "The company reported a 25% increase in quarterly profits, driven by strong sales in the Asia-Pacific region and successful product launches.",
  },
  {
    title: "Sustainability Initiative Reduces Carbon Footprint",
    author: "Priya Singh",
    date: "2024-03-02",
    category: "Environment",
    summary:
      "A new sustainability program has reduced the company’s carbon emissions by 18% over the past year, thanks to renewable energy investments and waste reduction efforts.",
  },
  {
    title: "Officer Killed in Line of Duty During Incident",
    author: "News Desk",
    date: "2024-03-25",
    category: "Events",
    summary:
      "Authorities report that an officer lost their life during a recent incident. Investigations are ongoing and more details will be released as they become available.",
  },
  {
    title: "CEO Hosts Live Q&A with Customers",
    author: "Communications Team",
    date: "2024-03-08",
    category: "Events",
    summary:
      "Our CEO answered questions from customers in a live online session, discussing future plans and addressing feedback on recent products.",
  },
  {
    title: "Painting Prices Soar Amid Growing Demand",
    author: "John Doe",
    date: "2024-03-18",
    category: "Art",
    summary:
      "Art collectors and investors are seeing painting prices hike up rapidly this year. Experts attribute the surge to increased demand for contemporary works and limited supply at major auctions.",
  },
  {
    title: "Mobile App Update Adds New Features",
    author: "Dev Team",
    date: "2024-03-03",
    category: "Technology",
    summary:
      "The latest version of our mobile app introduces enhanced security, a redesigned dashboard, and improved notification controls.",
  },
  {
    title: "Micheal Thompson Mysteriously Found Dead in His Apartment",
    author: "News Desk",
    date: "2024-04-20",
    category: "Events",
    summary:
      "Micheal Thompson was found dead in his apartment, his recent investigation cut short. Authorities are investigating the circumstances surrounding his death.",
  },
  {
    title: "Partnership Announced with Local Universities",
    author: "Outreach Office",
    date: "2024-03-11",
    category: "Education",
    summary:
      "We’ve partnered with leading universities to offer internships and research opportunities for students in data science and engineering.",
  },
  {
    title: "Charity Drive Raises $100,000 for Education",
    author: "CSR Team",
    date: "2024-03-14",
    category: "Community",
    summary:
      "Employees and partners raised funds to support educational programs for underprivileged children in rural areas.",
  },
  {
    title: "New Office Opens in Singapore",
    author: "Admin Team",
    date: "2024-03-06",
    category: "Business",
    summary:
      "The opening of our Singapore office marks a significant milestone in our Asia-Pacific growth strategy, providing better support for regional clients.",
  },
  {
    title: "Employee Spotlight: Innovator of the Month",
    author: "HR Team",
    date: "2024-03-17",
    category: "Culture",
    summary:
      "This month, we recognize Anjali Rao for her outstanding contributions to the AI research team and her leadership in mentoring new hires.",
  },
  {
    title: "Cybersecurity Awareness Training Rolled Out",
    author: "IT Security",
    date: "2024-03-09",
    category: "Technology",
    summary:
      "A new training program educates employees on best practices for data protection, phishing prevention, and secure remote work.",
  },
  {
    title: "Annual Tech Conference Scheduled for September",
    author: "Events Team",
    date: "2024-03-13",
    category: "Events",
    summary:
      "Our flagship tech conference will take place in September, featuring keynote speakers, workshops, and networking opportunities for industry professionals.",
  },
];

export default function NewsAgency({ setPageName }) {
  return <CompanyNewsCutoutList articles={sampleArticles} />;
}
