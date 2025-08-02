import Case1 from './pages/Case1';
import Cases from './pages/Cases';
import College from './pages/College';
import Director from './pages/people/Director';
import Home from './pages/Home'; 
import Hospital from './pages/Hospital';
import NotFound from './pages/NotFound';
import Symbols from './pages/Symbols';
import CEO from './pages/people/CEO';
import Doc1 from './pages/people/Doc1';
import Doc2 from './pages/people/Doc2';
import Inspector from './pages/people/Inspector';
import ngoHead from './pages/people/NGO Head';
import victim1 from './pages/people/Victim1';
import victim2 from './pages/people/Victim2';
import victim3 from './pages/people/Victim3';
import ward1 from './pages/people/Ward1';

export const PAGE_COMPONENTS = {
    // places
    "home": Home ,
    "symbols":  Symbols,
    "hospital": Hospital,
    "college": College,
    
    // case
    "cases": Cases,
    "case1": Case1,

    // peoples
    "director": Director,
    "ceo": CEO,
    "doc1": Doc1,
    "doc2": Doc2,
    "inspector": Inspector,
    "ngoHead": ngoHead,
    "victim1": victim1,
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