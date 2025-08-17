import fs from "fs";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Symbols from "./pages/Symbols";

// People
import Director from "./pages/people/Director";
import CEO from "./pages/people/CEO";
import Doc1 from "./pages/people/Doc1";
import Doc2 from "./pages/people/Doc2";
import Doc3 from "./pages/people/Doc3";
import Inspector from "./pages/people/Inspector";
import ngoHead from "./pages/people/NGO Head";
import victim2 from "./pages/people/Victim2";
import victim3 from "./pages/people/Victim3";
import ward1 from "./pages/people/Ward1";

// Place
import Police from "./pages/Police";
import NewsAgency from "./pages/NewsAgency";
import Hospital from "./pages/hospital/Hospital";
import College from "./pages/college/College";

// Case
import Cases from "./pages/Cases";
import Case1 from "./pages/Case1";
import Case3 from "./pages/Case3";
import Case2 from "./pages/Case2";

// Hospital Docs
import BirthRecords from "./pages/hospital/BirthRecords";
import DeathRecords from "./pages/hospital/DeathRecords";
import AutopsyReport from "./pages/hospital/AutopsyRecords";

// College Docs
import AlumniRecords from "./pages/college/AlumniRecords";
import TerminationRecords from "./pages/college/TerminationRecords";

// Logos
import collegeLogo from "./assets/logos/collegeLogo.png";
import companyLogo from "./assets/logos/companyLogo.png";
import hospitalLogo from "./assets/logos/hospitalLogo.png";
import newsLogo from "./assets/logos/newsLogo.png";
import ngoLogo from "./assets/logos/ngoLogo.png";
import policeLogo from "./assets/logos/policeLogo.png";
import portLogo from "./assets/logos/portLogo.png";

export const PAGE_COMPONENTS = {
  // places
  home: Home,
  symbols: Symbols,
  hospital: Hospital,
  college: College,
  police: Police,
  newsAgency: NewsAgency,

  // documents
  // "newsArchival": NewsArchival,
  birthRecords: BirthRecords,
  deathRecords: DeathRecords,
  autopsyRecords: AutopsyReport,
  alumniRecords: AlumniRecords,
  terminationRecords: TerminationRecords,

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
  ngoHead: ngoHead,
  victim2: victim2,
  victim3: victim3,
  ward1: ward1,

  // system
  notfound: NotFound,
};

// Key should match with PAGE_COMPONENTS
export const PAGE_TITLES = {
  home: "Home",
  symbols: "Symbols",

  hospital: "RedMarsh Hospital",
  college: "St. Healmore Medical College",
  police: "Police",
  newsAgency: "News Agency",
  birthRecords: "Birth Records",
  deathRecords: "Death Records",
  autopsyRecords: "Autopsy Records",
  alumniRecords: "Alumni Records",
  terminationRecords: "Termination Records",
  cases: "Cases",
  case1: "Case 1",
  case2: "Case 2",
  case3: "Case 3",
  director: "Dr. Arjun Verma",
  ceo: "CEO",
  doc1: "Dr. Juan Martinez",
  doc2: "Dr. Rohan Mehta",
  doc3: "Dr. Jhon Carter",
  inspector: "Inspector",
  ngoHead: "NGO Head",
  victim2: "Victim 2",
  victim3: "Victim 3",
  ward1: "Ward 1",
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
  ngo: "123 Maple Street, Willow Lane, Redmarsh",
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
};
