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
  Music,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import SideMenu from "./components/SideMenu";
import EvidenceBoard from "./components/EvidenceBoard";
import { grey } from "@mui/material/colors";
import Tutorial from "./components/Tutorial";
import { useSound } from "./hook/SoundContext";
import { red } from "@mui/material/colors";
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
import { MUSIC_TITLE, PAGE_KEYS, PAGE_TITLES } from "./consts";
import "./App.css";
import Cases from "./pages/Cases";
import VolumeController from "./components/VolumeController";
import DataController from "./components/DataController";

function App() {
  // Page and routing related states
  const [pageName, setPageName] = useState("home");
  const [history, setHistory] = useState(["home"]);
  const { playSFXMusic } = useSound();
  const [seenPages, setSeenPages] = useState(() => {
    let progress = JSON.parse(localStorage.getItem("pages"));
    if (progress && progress["pages"]) return new Set(progress["pages"]);
    return new Set();
  });

  // Menus related states
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [evidanceBoardOpen, setEvidanceBoardOpen] = useState(false);
  const [questionBoardOpen, setQuestionBoardOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(() => {
    return (JSON.parse(localStorage.getItem("pages")) || { pages: [] })[
      "pages"
    ];
  });

  //State for Tutorials
  const [runTour, setRunTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  const setPageNameWrapper = (pageName) => {
    goToPage(pageName);
    setQuestionBoardOpen(false);
  };

  const handleCloseTabUnopened = () => {
    navigate("/");
  };

  // Pages / Routing related
  const goToPage = (page) => {
    setPageName(page);
    setHistory((prevHistory) => [...prevHistory, page]);
  };

  useEffect(() => {
    playSFXMusic(MUSIC_TITLE.MinorLink);
    if (seenPages.has(PAGE_TITLES[pageName])) return;
    let newSeenPages = new Set([...seenPages, PAGE_TITLES[pageName]]);
    setSearchResults([...newSeenPages]);
    setSeenPages(new Set(newSeenPages));
    localStorage.setItem("pages", JSON.stringify({ pages: [...newSeenPages] }));
  }, [pageName]);

  // Key bindings
  const handleSearch = (query) => {
    if (query.trim() != "")
      setSearchResults(
        [...seenPages].filter((pageName) => {
          if (pageName.toLowerCase().includes(query.toLowerCase()))
            return pageName;
        })
      );
    else setSearchResults([...seenPages]);
  };

  const goToPreviousPage = () => {
    if (history.length > 1) {
      setPageName(history[history.length - 2]);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.altKey && event.code === "ArrowLeft") {
        event.preventDefault();
        goToPreviousPage();
      } else if (event.ctrlKey && event.code === "KeyK") {
        event.preventDefault();
        setSearchOpen(!searchOpen);
      } else if (event.ctrlKey && event.code === "KeyH") {
        event.preventDefault();
        setSideMenuOpen(!sideMenuOpen);
      } else if (event.ctrlKey && event.code === "KeyS") {
        event.preventDefault();
        setQuestionBoardOpen(!questionBoardOpen);
      } else if (event.ctrlKey && event.code === "KeyG") {
        event.preventDefault();
        setPageName("home");
      }
    },
    [
      goToPreviousPage,
      setSearchOpen,
      setSideMenuOpen,
      setQuestionBoardOpen,
      setPageName,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // Tour/Intro setup
  // TODO: Add starting for tour
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
    setStepIndex(0);
  }, []);

  return (
    <>
      <div style={{ padding: 10, backgroundColor: grey[400] }}>
        {/* Overlay layer. */}
        <div style={{ height: "100vh", width: "fit-content" }}>
          <Stack
            style={{ position: "sticky", top: "5px", zIndex: 15 }}
            spacing={1}
          >
            <Tooltip title="Open Evidence Board. clt + Space" placement="right">
              <NotebookPen
                cursor="pointer"
                className="menu"
                onClick={() => setEvidanceBoardOpen(!evidanceBoardOpen)}
                aria-label="Evidence Board"
              />
            </Tooltip>
            <Tooltip title="Go Back; alt + Left Arrow" placement="right">
              <MoveLeft cursor="pointer" onClick={goToPreviousPage} />
            </Tooltip>
            <Tooltip title="Search; clt + K" placement="right">
              <Search
                cursor="pointer"
                onClick={() => setSearchOpen(!searchOpen)}
              />
            </Tooltip>
            <Tooltip title="History; clt + H" placement="right">
              <History
                cursor="pointer"
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
              />
            </Tooltip>
            <Tooltip title="Cases; clt + S" placement="right">
              <FileQuestionMark
                cursor="pointer"
                onClick={() => setQuestionBoardOpen(!questionBoardOpen)}
              />
            </Tooltip>
            <Tooltip title="Music" placement="right">
              <Music cursor="pointer" />
            </Tooltip>

            <Tooltip title="Settings" placement="right">
              <Settings
                cursor="pointer"
                onClick={() => setOptionsIsOpen(true)}
              />
            </Tooltip>
          </Stack>
        </div>

        <Tooltip title="Exit Application" placement="left">
          <IconButton
            aria-label="exit"
            onClick={handleCloseTabUnopened}
            sx={{
              position: "fixed",
              top: 10,
              right: 20,
              zIndex: 1001,
              backgroundColor: red[700],
              color: "white",
              "&:hover": {
                backgroundColor: red[900],
              },
              borderRadius: 2,
              boxShadow: 3,
              padding: "10px",
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

        {/* Cases Modal */}
        <Modal
          open={questionBoardOpen}
          onClose={() => setQuestionBoardOpen(false)}
        >
          <Box
            sx={{
              height: "80vh",
              width: "60vw",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              overflowY: "auto",
              top: "50%",
              left: "50%",
              bgcolor: grey[500],
              color: "text.primary",
              borderRadius: 4,
              outline: "none",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={() => setQuestionBoardOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <X />
            </IconButton>
            <Cases
              setPageName={setPageNameWrapper}
              sx={{ left: "2vw", width: "50vw" }}
            />
          </Box>
        </Modal>

        {/* Search modal */}
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
                      setSearchResults([...seenPages]);
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

        {/* settings modal */}
        <Modal open={optionsIsOpen} onClose={() => setOptionsIsOpen(false)}>
          <Box
            sx={{
              height: "55vh",
              width: "60vw",
              position: "absolute",
              top: "5vh",
              left: "20vw",
              backgroundColor: grey[500],
              overflow: "hidden",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              paddingInline={2}
              paddingTop={2}
            >
              <Typography variant="h4" component="h2">
                Settings
              </Typography>
              <IconButton
                onClick={() => setOptionsIsOpen(false)}
                aria-label="Close settings"
              >
                <X />
              </IconButton>
            </Box>
            <Box
              sx={{
                height: "50vh",
                padding: 2,
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <VolumeController />
              <DataController />
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
