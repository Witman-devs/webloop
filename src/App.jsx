import { useEffect, useState } from "react";
import PageRouter from "./components/PageRouter";
import { Settings } from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";
import MainMenu from "./MainMenu";
import mlink_hit_sfx from './assets/sfx/minorlink.mp3';
import Tutorial from "./components/Tutorial";
import { useSound } from './SoundContext'; // Assuming you save the above code in SoundContext.js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");
  const [start, setStart] = useState(false);
  const { getEffectiveVolume } = useSound();

  useEffect(() => {
    link_hit.play(); // Play the sound effect
  }, [pageName]);

  const link_hit = new Howl({
    src: [mlink_hit_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume('sfx', 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true
  });

  // Menus related states
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(false);

  //State for Tutorials
  const [runTour, setRunTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    setStepIndex(0);
    setRunTour(true);
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status, index, type, action } = data;
    const finishedStatuses = ['finished', 'skipped'];
    
    if (finishedStatuses.includes(status)) {
      setRunTour(false);
    } else if (type === 'step:after') {
      if (action === 'next') {
        setStepIndex(index + 1);
      } else if (action === 'back' || action === 'prev') {
        setStepIndex(Math.max(index - 1, 0));
      }
    }
  };

  const theme = createTheme({
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: red[900],
            textDecoration: 'underline', 
            textDecorationColor: red[900], 
            '&:hover': {
              color: red[700],
              textDecorationColor: red[700], 
            },
          },
        },
      },
    },
  });
  
  return start ? (
    <ThemeProvider theme={theme}>
    <div style={{ padding: 10, backgroundColor: grey[300], }}>

        <div className="menu" style={{ height: "100vh", width:"fit-content"}}>
          <Settings
            style={{ position: "sticky", top: "5px", zIndex: 15 }}
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
          />
          <Floaty />
        </div>

        <div style={{ height: "100vh", position: "absolute", zIndex: 10, top: 0, width: "calc(100vw - 16px)", overflow: "auto" }} >
          <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} setEvidanceBoardOpen={setEvidanceBoardOpen} />
          <PageRouter pageName={pageName} setPageName={setPageName} />
        </div>
        {evidanceBoardOpen && <EvidenceBoard setEvidanceBoardOpen={setEvidanceBoardOpen} />}
        <Tutorial runTour={runTour} stepIndex={stepIndex} callback={handleJoyrideCallback} />
      </div>
      </ThemeProvider>) : (<MainMenu setStart={setStart} />)
}

export default App;
