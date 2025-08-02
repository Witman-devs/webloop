import CompanyNewsCutoutList from "../components/NewsList";

const sampleArticles = [
  {
    title: "New AI Model Revolutionizes Finance",
    author: "Manoj Tiwari",
    date: "2025-07-15",
    category: "Technology",
    summary:
      "Our latest AI breakthrough sets a new benchmark in automated trading and financial forecasting.",
  },
  {
    title: "Company Expands into Europe",
    author: "Elena Verma",
    date: "2025-06-28",
    category: "Business",
    summary:
      "We’ve announced new operations in Berlin and Amsterdam as part of our global expansion strategy.",
  },
  {
    title: "Employee Wellness Program Launched",
    author: "HR Team",
    date: "2025-07-01",
    category: "Culture",
    summary:
      "New mental health and fitness initiatives to improve employee well-being.",
  },
];


export default function NewsAgency({setPageName}){
    return(
    <CompanyNewsCutoutList articles={sampleArticles} />
    )
}   
