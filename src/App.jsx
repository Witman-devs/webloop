import { useCallback, useEffect, useState } from "react";
import PageRouter from "./components/PageRouter";
import {
  History,
  MoveLeft,
  MoveRight,
  NotebookPen,
  Search,
  LogOut,
  X,
  FileQuestionMark,
  Settings,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import SideMenu from "./components/SideMenu";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";
import Tutorial from "./components/Tutorial";
import VideoPlayer from "./components/VideoPlayer";
import { useSound } from "./hook/SoundContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import intro from "./assets/intro.mp4";
import {
  Box,
  colors,
  Input,
  Link,
  Modal,
  Backdrop,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { MUSIC_TITLE, PAGE_COMPONENTS, PAGE_KEYS, PAGE_TITLES } from "./consts";
import Floaty from "./components/Floty";
import "./App.css";
import { CenterFocusStrong, Savings } from "@mui/icons-material";
import MonochromeButton from "./components/MonochromeButton";
import Cases from "./pages/Cases";

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");
  const [showVideo, setShowVideo] = useState(true);
  const [history, setHistory] = useState(["home"]);
  const { playSFXMusic } = useSound();
  const [seenPages, setSeenPages] = useState(() => {
    let progress = JSON.parse(localStorage.getItem("pages"));
    if (progress && progress["pages"]) return new Set(progress["pages"]);
    return new Set();
  });

  // Menus related states
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(false);
  const [questionBoardOpen, setQuestionBoardOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //State for Tutorials
  const [runTour, setRunTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  // Progress related
  const saveProgress = () => {
    // Saving as array as Set converted to object on save
    localStorage.setItem("pages", JSON.stringify({ pages: [...seenPages] }));
  }
  
  const setPageNameWrapper = (pageName) => {
    goToPage(pageName);
    setQuestionBoardOpen(false);
  }

  const handleCloseTabUnopened = () => {
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", saveProgress);

    return () => {
      window.removeEventListener("beforeunload", saveProgress);
    };
  }, [saveProgress]);

  // Pages / Routing related
  const goToPage = (page) => {
    setPageName(page);
    setHistory((prevHistory) => [...prevHistory, page]);
  };

  useEffect(() => {
    playSFXMusic(MUSIC_TITLE.MinorLink);
    if (seenPages.has(pageName)) return;
    setSeenPages((prev) => {
      let newSet = prev.add(PAGE_TITLES[pageName]);
      return new Set(newSet);
    });
  }, [pageName]);

  // Key bindings
  const handleSearch = (query) => {
    console.log('"', searchQuery, '" "', query, '"');
    let Pages = Object.values(PAGE_TITLES);
    let searchParam = searchQuery.trim();
    if (query && query.trim()) searchParam = query.trim();
    if (searchParam.trim() == "")
      setSearchResults(Pages.filter((pageName) => seenPages.has(pageName)));
    else
      setSearchResults(
        Pages.filter((pageName) => {
          if (!seenPages.has(pageName)) return null;
          if (pageName.toLowerCase().includes(searchParam.toLowerCase()))
            return pageName;
        })
      );
  };

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
      else if (event.ctrlKey && event.code === "KeyK") {
        event.preventDefault();
        setSearchOpen(!searchOpen);
      }
      else if (event.ctrlKey && event.code === "KeyH") {
        event.preventDefault();
        setSideMenuOpen(!sideMenuOpen);
      }
      else if (event.ctrlKey && event.code === "KeyA") {
        event.preventDefault();
        setQuestionBoardOpen(!questionBoardOpen);
      }
      else if (event.ctrlKey && event.code === "KeyG") {
        event.preventDefault();
        setPageName("home");
      }
    },
    [goToPreviousPage, setSearchOpen, setSideMenuOpen, setQuestionBoardOpen, setPageName]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Tour/Intro setup

  const handleVideoEndedOrSkipped = () => {
    setShowVideo(false);
    setRunTour(true);
  };

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
    setStepIndex(0);
  }, []);

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
            <Tooltip title="Cases; clt + A" placement="right">
              <FileQuestionMark onClick={() => setQuestionBoardOpen(!questionBoardOpen)} />
            </Tooltip> 
          </Stack>
          <Floaty />
        </div>

        <Tooltip title="Exit Application" placement="left">
          <IconButton
            aria-label="exit"
            onClick={handleCloseTabUnopened}
            sx={{
              position: 'fixed',
              top: 10,
              right: 20,
              zIndex: 1001,
              backgroundColor: red[700],
              color: 'white',
              '&:hover': {
                backgroundColor: red[900],
              },
              borderRadius: 2,
              boxShadow: 3,
              padding: '10px',
            }}
          >
            <LogOut size={24} />
          </IconButton>
        </Tooltip>
        
        {/* Main content area */}
        <div
          className="vignette-effect"
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

        <Modal
          open={questionBoardOpen}
          onClose={() => setQuestionBoardOpen(false)}
        >
          <Box sx={{
            height: "80vh",
            width: "40vw",
            position: "absolute",
            transform: 'translate(-50%, -50%)',
            overflowY: "scroll",
            top: "50%",
            left: "50%", bgcolor: grey[500], color: 'text.primary',
            borderRadius: 4, 
            outline: 'none',
          }}>
            <IconButton
              aria-label="close"
              onClick={() => setQuestionBoardOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[800],
              }}
            >
              <X size={20} />
            </IconButton>
            <Cases setPageName={setPageNameWrapper} />
          </Box>
        </Modal>

        {/* TODO: Make better css for search */}
        <Modal
          open={searchOpen}
          onClose={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        >
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
                  sx={{ maxHeight: "10vh" }}
                  variant="outlined"
                  placeholder="Search Visited Page..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  fullWidth
                  autoFocus={true}
                />
              </form>

              <Stack
                className="search-scroll"
                gap={1}
                sx={{
                  height: "45vh",
                  overflowY: "scroll",
                }}
              >
                {searchResults.map((element, index) => (
                  <Link
                    key={index}
                    variant="subtitle1"
                    className="search-stack"
                    id={index}
                    style={{
                      paddingInlineStart: "36px",
                    }}
                    onClick={() => {
                      goToPage(PAGE_KEYS[element]);
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <div style={{ "&:hover": { color: grey[900] } }}>
                      {element}
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
