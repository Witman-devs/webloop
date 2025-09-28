import fs from "fs";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Symbols from "./pages/Symbols";

// People
import Director from "./pages/people/CletusBlick";
import CEO from "./pages/people/JamesAnderson";
import Doc1 from "./pages/people/JuanMartinez";
import Doc2 from "./pages/people/HubertLowe";
import Doc3 from "./pages/people/JohnCarter";
import Inspector from "./pages/people/OliveHarris";
import chemCeo from "./pages/people/MollySanford";
import victim2 from "./pages/people/MarkSullivan";
import victim3 from "./pages/people/MichaelThompson";
import ward1 from "./pages/people/SamuelHayes";
import chemEng from "./pages/people/SandyHarris";
import alonzo from "./pages/people/AlonzoMcEnzie";
import angelina from "./pages/people/AngelinaGrimes";
import ivan from "./pages/people/IvanLofer";
import van from "./pages/people/VanSwift";

// Place
import Police from "./pages/policeOffice/policeOffice";
import NewsAgency from "./pages/newsAgency/NewsAgency";
import Hospital from "./pages/hospital/Hospital";
import College from "./pages/college/College";
import Port from "./pages/port/Port";
import Chemicals from "./pages/chemicals/Chemicals";
import Company from "./pages/company/Company";

// Case
import Cases from "./pages/Cases";
import Case1 from "./pages/Case1";
import Case3 from "./pages/Case3";
import Case2 from "./pages/Case2";

// news docs
import NewsArchive from "./pages/newsAgency/NewsArchive"

// chemicals Docs
import ChemEmploymentRecords from "./pages/chemicals/EmploymentRecords";
import ChemCheckinRecords from "./pages/chemicals/CheckinRecords";

// Port Docs
import PortEmploymentRecords from "./pages/port/EmploymentRecords";
import PortCheckinRecords from "./pages/port/CheckinRecords";

// Hospital Docs
import BirthRecords from "./pages/hospital/BirthRecords";
import DeathRecords from "./pages/hospital/DeathRecords";
import AutopsyReport from "./pages/hospital/AutopsyRecords";
import HospitalEmploymentRecords from "./pages/hospital/EmploymentRecords";
import HospitalCheckinRecords from "./pages/hospital/CheckinRecords";

// College Docs
import AlumniRecords from "./pages/college/AlumniRecords";
import TerminationRecords from "./pages/college/TerminationRecords";

// Police Docs
import WeaponRegistry from "./pages/policeOffice/WeaponRegistry";
import PoliceEmploymentRecords from "./pages/policeOffice/EmploymentRecords";

// Genrico Docs
import GenricoEmploymentRecords from "./pages/company/EmploymentRecords";
import GenricoCheckinRecords from "./pages/company/CheckinRecords";

// Logos
import collegeLogo from "./assets/logos/collegeLogo.png";
import companyLogo from "./assets/logos/companyLogo.png";
import hospitalLogo from "./assets/logos/hospitalLogo.png";
import newsLogo from "./assets/logos/newsLogo.png";
import ngoLogo from "./assets/logos/ngoLogo.png";
import policeLogo from "./assets/logos/policeLogo.png";
import portLogo from "./assets/logos/portLogo.png";
import chemicalsLogo from "./assets/logos/chemicalsLogo.png";

export const PAGE_COMPONENTS = {
  // places
  home: Home,
  symbols: Symbols,
  hospital: Hospital,
  college: College,
  police: Police,
  port: Port,
  newsAgency: NewsAgency,
  chemicals: Chemicals,
  company: Company,

  // documents
  // "newsArchival": NewsArchival,
  birthRecords: BirthRecords,
  deathRecords: DeathRecords,
  autopsyRecords: AutopsyReport,
  alumniRecords: AlumniRecords,
  terminationRecords: TerminationRecords,
  hospitalEmployeeRecords: HospitalEmploymentRecords,
  hospitalCheckinRecords: HospitalCheckinRecords,
  portEmployeeRecords: PortEmploymentRecords,
  portCheckinRecords: PortCheckinRecords,
  weaponRegistry : WeaponRegistry,
  chemEmployeeRecords: ChemEmploymentRecords,
  chemCheckinRecords: ChemCheckinRecords,  
  policeEmployeeRecords: PoliceEmploymentRecords,
  newsArchive: NewsArchive,
  genricoEmployeeRecords: GenricoEmploymentRecords,
  genricoCheckinRecords: GenricoCheckinRecords,  

  // case
  cases: Cases,
  case1: Case1,
  case2: Case2,
  case3: Case3,

  // peoples
  director: Director,
  ceo: CEO,
  doc1: Doc1,
  doc2: Doc2,
  doc3: Doc3,
  inspector: Inspector,
  chemCeo: chemCeo,
  victim2: victim2,
  victim3: victim3,
  ward1: ward1,
  chemEng: chemEng,
  alonzo: alonzo,
  angelina: angelina,
  ivan: ivan,
  van: van,

  // system
  notfound: NotFound,
};

// Key should match with PAGE_COMPONENTS
export const PAGE_TITLES = {
  home: "Home",
  symbols: "Symbols",
  cases: "Cases",
  case1: "Case 1",
  case2: "Case 2",
  case3: "Case 3",

  hospital: "RedMarsh Healthcare",
  college: "St. Healmore Medical College",
  port: "Redmarsh Postal Services Port division",
  police: "Redmarsh Police Department",
  newsAgency: "News Agency",
  chemicals: "Redmarsh Chemicals",
  company: "Generico",

  birthRecords: "Birth Records",
  deathRecords: "Death Records",
  hospitalCheckinRecords:"Redmarsh Healthcare Checkin Records",
  autopsyRecords: "Autopsy Records",
  hospitalEmployeeRecords: "Redmarsh Healthcare Employee Records",

  alumniRecords: "Alumni Records",
  terminationRecords: "Termination Records",

  portEmployeeRecords: "Port Employment Records",
  portCheckinRecords: "Port Checkin Records",  

  chemEmployeeRecords: "Redmarsh Chemicals Employment Records",
  chemCheckinRecords: "Redmarsh Chemicals Checkin Records",  

  weaponRegistry: "Weapon Registry",
  policeEmployeeRecords: "Police Employee Records",

  newsArchive: "News Archive",
  
  genricoEmployeeRecords: "Genrico Employment Records",
  genricoCheckinRecords: "Genrico Checkin Records",  
  
  director: "Dr. Cletus Blick",
  doc1: "Dr. Juan Martinez",
  doc2: "Dr. Hubert Lowe",
  doc3: "Dr. Jhon Carter",
  inspector: "Olive Harris",
  chemCeo: "Molly Sanford",
  victim2: "Mark Sullivan",
  victim3: "Michael Thompson",
  ward1: "Ward 1",
  chemEng: "Sandy Harris",
  alonzo: "Alonzo McEnzie",
  angelina: "Angelina Grimes",
  ivan: "Ivan Lofer",
  van: "Van Swift",

  notfound: "Page Not Found",
};

export const PAGE_KEYS = {};
Object.keys(PAGE_TITLES).forEach(key => {PAGE_KEYS[PAGE_TITLES[key]] = key;})

export let MUSIC_TITLE = {
  MainMenu: "Main menu",
  SciFi: "Sci-Fi Detective",
  Clown: "Clown Circus",
  WOO: "WOOOOOO",
  Home: "home",
  MainMenuLink: "mainMenuLink",
  MinorLink: "minorLink",
  Note: "note",
  Cliff: "Cliff",
  ManHunt: "ManHunt",
  Noise: "Noise",
  Test: "Test",
  Puzzle: "Puzzle",
  Sleep: "Sleep",
  Untitled: "Untitled",
  Remove: "remove",
  StartGame: "startGame",
  Correct: "correct",
  Incorrect: "incorrect",
}

export let MUSIC = {
  main: [
    { label: MUSIC_TITLE.MainMenu, fileName: "/music/mm.mp3" },
    { label: MUSIC_TITLE.WOO, fileName: "/music/WOOOO.mp3" },
    { label: MUSIC_TITLE.SciFi, fileName: "/music/bgmusicdet2.mp3" },
    { label: MUSIC_TITLE.Untitled, fileName: "/music/untitled.mp3" },
    { label: MUSIC_TITLE.Sleep, fileName: "/music/sleep.mp3" },
    { label: MUSIC_TITLE.Puzzle, fileName: "/music/puzzle.mp3" },
    { label: MUSIC_TITLE.Noise, fileName: "/music/noise.mp3" },
    { label: MUSIC_TITLE.Test, fileName: "/music/test.mp3" },
    { label: MUSIC_TITLE.ManHunt, fileName: "/music/manHunt.mp3" },
    { label: MUSIC_TITLE.Cliff, fileName: "/music/cliff.mp3" },
    { label: MUSIC_TITLE.Clown, fileName: "/music/bgoutroug.mp3" },
  ],
  sfx: [
    { label: MUSIC_TITLE.Home, fileName: "/music/sfx/home.mp3" },
    { label: MUSIC_TITLE.Correct, fileName: "/music/sfx/correct.mp3" },
    { label: MUSIC_TITLE.Incorrect, fileName: "/music/sfx/incorrect.mp3" },
    {
      label: MUSIC_TITLE.MainMenuLink,
      fileName: "/music/sfx/mainMenuLink.mp3",
    },
    { label: MUSIC_TITLE.MinorLink, fileName: "/music/sfx/minorLink.mp3" },
    { label: MUSIC_TITLE.Note, fileName: "/music/sfx/note.mp3" },
    { label: MUSIC_TITLE.Remove, fileName: "/music/sfx/remove.mp3" },
    { label: MUSIC_TITLE.StartGame, fileName: "/music/sfx/startGame.mp3" },
  ],
};

export const ADDRESS = {
  police: "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh",
  chemicals: "123 Maple Street, Willow Lane, Redmarsh",
  hospital: "Health Sector 4, Heartline Road, Redmarsh",
  company: "Skyline Tower, Innovation District, Redmarsh",
  port: "Willow Lane, Redmarsh, Midwest",
  news: "221 Oakridge Lane, Westbridge, Redmarsh",
  college: "Health Sector 2, Heartline Road, Redmarsh",
};

export const LOGOS = {
  police: policeLogo,
  ngo: ngoLogo,
  hospital: hospitalLogo,
  company: companyLogo,
  port: portLogo,
  news: newsLogo,
  college: collegeLogo,
  chemicals: chemicalsLogo
};
