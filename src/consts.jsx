import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import Symbols from './pages/Symbols';

// People 
import Director from './pages/people/Director';
import CEO from './pages/people/CEO';
import Doc1 from './pages/people/Doc1';
import Doc2 from './pages/people/Doc2';
import Doc3 from './pages/people/Doc3';
import Inspector from './pages/people/Inspector';
import ngoHead from './pages/people/NGO Head';
import victim2 from './pages/people/Victim2';
import victim3 from './pages/people/Victim3';
import ward1 from './pages/people/Ward1';

// Place
import Police from './pages/Police';
import NewsAgency from './pages/NewsAgency';
import Hospital from './pages/hospital/Hospital';
import College from './pages/college/College';

// Case
import Cases from './pages/Cases';
import Case1 from './pages/Case1';
import Case3 from './pages/Case3';
import Case2 from './pages/Case2';

// Hospital Docs
import BirthRecords from './pages/hospital/BirthRecords';
import DeathRecords from './pages/hospital/DeathRecords';

// College Docs
import AlumniRecords from './pages/college/AlumniRecords';

// Logos
import collegeLogo from './assets/logos/collegeLogo.png';
import companyLogo from './assets/logos/companyLogo.png';
import hospitalLogo from './assets/logos/hospitalLogo.png';
import newsLogo from './assets/logos/newsLogo.png';
import ngoLogo from './assets/logos/ngoLogo.png';
import policeLogo from './assets/logos/policeLogo.png';
import portLogo from './assets/logos/portLogo.png';
import TerminationRecords from './pages/college/TerminationRecords';

export const PAGE_COMPONENTS = {
    // places
    "home": Home ,
    "symbols":  Symbols,
    "hospital": Hospital,
    "college": College,
    "police": Police,
    "newsAgency": NewsAgency,
    
    // documents 
    // "newsArchival": NewsArchival,
    "birthRecords":BirthRecords,
    "deathRecords":DeathRecords,
    "alumniRecords": AlumniRecords,
    "terminationRecords": TerminationRecords,
    
    // case
    "cases": Cases,
    "case1": Case1,
    "case2": Case2,
    "case3": Case3,

    // peoples
    "director": Director,
    "ceo": CEO,
    "doc1": Doc1,
    "doc2": Doc2,
    "doc3": Doc3,
    "inspector": Inspector,
    "ngoHead": ngoHead,
    "victim2": victim2,
    "victim3": victim3,
    "ward1": ward1,
    
    // system
    "notfound": NotFound,
}

export const MUSIC = [
    
    {"label":"Sci-Fi Detective", "fileName": "../assets/music/bgmusicdet2.mp3"},
    {"label":"Clown Circus", "fileName": "../assets/music/bgoutroug.mp3"},
    {"label":"WOOOOOO", "fileName": "../assets/music/WOOOO.mp3"},
]

export const ADDRESS = {
    "police": "Inspector's Quarters, Police Colony, Willow Lane, Redmarsh",
    "ngo": "123 Maple Street, Willow Lane, Redmarsh",
    "hospital": "Health Sector 4, Heartline Road, Redmarsh",
    "company": "Skyline Tower, Innovation District, Redmarsh",
    "port":"Willow Lane, Redmarsh, Midwest",
    "news":"221 Oakridge Lane, Westbridge, Redmarsh",
    "college": "Health Sector 2, Heartline Road, Redmarsh"
}

export const LOGOS = {
    "police": policeLogo,
    "ngo": ngoLogo,
    "hospital": hospitalLogo,
    "company": companyLogo,
    "port": portLogo,
    "news": newsLogo,
    "college": collegeLogo

}