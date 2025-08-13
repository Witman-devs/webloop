import { use, useCallback, useEffect, useState } from "react";
import PageRouter from "./components/PageRouter";
import {
  History,
  MoveLeft,
  MoveRight,
  NotebookPen,
  Search,
  Settings,
} from "lucide-react";
import SideMenu from "./components/SideMenu";
import Floaty from "./components/Floty";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";
import MainMenu from "./MainMenu";
import mlink_hit_sfx from "./assets/sfx/minorlink.mp3";
import Tutorial from "./components/Tutorial";
import VideoPlayer from "./components/VideoPlayer";
import { useSound } from "./SoundContext"; // Assuming you save the above code in SoundContext.js
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import intro from "./assets/intro.mp4"; // Assuming you save the above code in SoundContext.js
import {
  Box,
  colors,
  Input,
  Link,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MonochromeButton from "./components/MonochromeButton";
import { PAGE_COMPONENTS, PAGE_TITLES } from "./consts";
import './App.css';

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");
  const [showVideo, setShowVideo] = useState(true);
  const [history, setHistory] = useState(["home"]);
  const { getEffectiveVolume } = useSound();

  // Menus related states
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

    //State for Tutorials
  const [runTour, setRunTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);


  const goToPage = (page) => {
    setPageName(page);
    setHistory((prevHistory) => [...prevHistory, page]);
  };

  const handleVideoEndedOrSkipped = () => {
    setShowVideo(false);
    setRunTour(true);
  };

  useEffect(() => {
    // Check if the video has been played before
    const hasPlayedVideo = localStorage.getItem("hasPlayedVideo");
    if (hasPlayedVideo) {
      setShowVideo(false);
      setRunTour(false);
    } else {
      localStorage.setItem("hasPlayedVideo", "true");
    }
  }, []);

  useEffect(() => {
    link_hit.play(); // Play the sound effect
  }, [pageName]);

  const link_hit = new Howl({
    src: [mlink_hit_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume("sfx", 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true,
  });

  const goToPreviousPage = () => {
    console.log("Going to previous page");
    console.log(history);
    if (history.length > 1) {
      setPageName(history[history.length - 2]);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.ctrlKey && event.code === "ArrowLeft") goToPreviousPage();
      else if (event.ctrlKey && event.code === "KeyK"){
        event.preventDefault();
        setSearchOpen(!searchOpen);
      }
      else if (event.ctrlKey && event.code === "KeyH"){
        event.preventDefault();
        setSideMenuOpen(!sideMenuOpen);
      }
    },
    [goToPreviousPage, setSearchOpen, setSideMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleSearch = (query) => {
    let Pages = Object.keys(PAGE_COMPONENTS);
    let searchParam = searchQuery;
    if (query) searchParam = query;
    setSearchResults(
      Pages.filter((pageName) => pageName.includes(searchParam.toLowerCase()))
    );
  };


  useEffect(() => {
    setStepIndex(0);
  }, []);

  const handleJoyrideCallback = (data) => {
    const { status, index, type, action } = data;
    const finishedStatuses = ["finished", "skipped"];

    if (finishedStatuses.includes(status)) {
      setRunTour(false);
    } else if (type === "step:after") {
      if (action === "next") {
        setStepIndex(index + 1);
      } else if (action === "back" || action === "prev") {
        setStepIndex(Math.max(index - 1, 0));
      }
    }
  };

  return (
    <>
      {showVideo && (
        <VideoPlayer
          videoSrc={intro}
          onVideoEnd={handleVideoEndedOrSkipped}
          onSkip={handleVideoEndedOrSkipped}
        />
      )}

      <div style={{ padding: 10, backgroundColor: grey[400] }}>
        {/* Overlay layer. */}
        <div style={{ height: "100vh", width: "fit-content" }}>
          <Stack
            style={{ position: "sticky", top: "5px", zIndex: 15 }}
            spacing={1}
          >
            <Tooltip title="Open Evidence Board. clt + Space" placement="right">
              <NotebookPen
                className="menu"
                onClick={() => setEvidanceBoardOpen(!evidanceBoardOpen)}
                aria-label="Evidence Board"
              />
            </Tooltip>
            <Tooltip title="Go Back; clt + Left Arrow" placement="right">
              <MoveLeft onClick={goToPreviousPage} />
            </Tooltip>
            <Tooltip title="Search; clt + K" placement="right">
              <Search onClick={() => setSearchOpen(!searchOpen)} />
            </Tooltip>
            <Tooltip title="History; clt + H" placement="right">
              <History onClick={() => setSideMenuOpen(!sideMenuOpen)} />
            </Tooltip>
          </Stack>
          <Floaty />
        </div>

        {/* Main content area */}
        <div className="vignette-effect"
          style={{
            height: "100vh",
            position: "absolute",
            zIndex: 10,
            top: 0,
            width: "calc(100vw - 10px)",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <PageRouter pageName={pageName} setPageName={goToPage} />
        </div>

        {/* Hidden elements */}
        <EvidenceBoard
          evidanceBoardOpen={evidanceBoardOpen}
          setEvidanceBoardOpen={setEvidanceBoardOpen}
        />

        <SideMenu
          sideMenuOpen={sideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
          setEvidanceBoardOpen={setEvidanceBoardOpen}
          History={history}
          goToPage={goToPage}
        />

        <Tutorial
          runTour={runTour}
          stepIndex={stepIndex}
          callback={handleJoyrideCallback}
        />

          {/* TODO: Make better css for search */}
        <Modal open={searchOpen} onClose={() => setSearchOpen(false)}>
          <Box
            sx={{
              height: "55vh",
              width: "40vw",
              position: "absolute",
              top: "5vh",
              left: "30vw",
              backgroundColor: grey[500],
              overflow: "hidden",
            }}
          >
            <Stack spacing={2} sx={{ padding: 2 }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                style={{
                  position: "sticky",
                  top: "5px",
                  backgroundColor: grey[500],
                }}
              >
                <TextField
                  InputProps={{
                    startAdornment: <Search position="start">Search</Search>,
                  }}
                  variant="outlined"
                  placeholder="Search Visited Page..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  fullWidth
                />
              </form>
              <Stack className="search-scroll" gap={1} 
                sx={{
                  maxHeight: '250px',
                  overflowY: 'auto',
                }}>
                {searchResults.map((element, index) => (
                  <Link
                  variant="subtitle1"
                  className="search-stack"
                  id={index}
                  style={{
                    paddingInlineStart: "36px",
                  }}
                  onClick={()=>goToPage(element)}
                  >
                    <div style={{"&:hover":{color:grey[900]}}}>
                    {PAGE_TITLES[element]}
                  </div>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
