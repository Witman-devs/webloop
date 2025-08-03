import { useCallback, useEffect, useState } from "react";
import PageRouter from "./components/PageRouter";
import { Settings } from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";
import MainMenu from "./MainMenu";
import mlink_hit_sfx from './assets/sfx/minorlink.mp3';
import Tutorial from "./components/Tutorial";
import VideoPlayer from "./components/VideoPlayer";
import { useSound } from './SoundContext'; // Assuming you save the above code in SoundContext.js
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import intro from './assets/intro.mp4'; // Assuming you save the above code in SoundContext.js

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");
  const [showVideo, setShowVideo] = useState(true);
  const [start, setStart] = useState(false);
  const { getEffectiveVolume } = useSound();

  const handleVideoEndedOrSkipped = () => {
    setShowVideo(false);
    setRunTour(true); // Start the tutorial after the video ends or is skipped
  };
    // useCallback to memoize the event handler for performance
  const handleKeyPress = useCallback((event) => {
    // We attach this listener to 'document', making it global.
    // It will trigger no matter which specific element is focused.
    if (event.key === 'e' || event.key === 'E') {
      setEvidanceBoardOpen(prev => !prev);
    }
  }, []); // Empty dependency array means this function is created once

  useEffect(() => {
    // Add event listener to the document object
    // This makes the 'e' key listener active globally across your app
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); // Dependency on handleKeyPress ensures correct cleanup/re-registration

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
            cursor: 'pointer',
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
      
    {showVideo && (
      <VideoPlayer
        videoSrc={intro}
        onVideoEnd={handleVideoEndedOrSkipped}
        onSkip={handleVideoEndedOrSkipped}
      />
    )}
    <div style={{ padding: 10, backgroundColor: grey[400], }}>

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
