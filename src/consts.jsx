import Case1 from './pages/Case1';
import Cases from './pages/Cases';
import College from './pages/College';
import Director from './pages/people/Director';
import Home from './pages/Home'; 
import Hospital from './pages/Hospital';
import NotFound from './pages/NotFound';
import Symbols from './pages/Symbols';

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
    
    // system
    "notfound": NotFound,
}

export const MUSIC = [
    
    {"label":"Sci-Fi Detective", "fileName": "../assets/music/bgmusicdet2.mp3"},
    {"label":"Clown Circus", "fileName": "../assets/music/bgoutroug.mp3"},
    {"label":"WOOOOOO", "fileName": "../assets/music/WOOOO.mp3"},
]