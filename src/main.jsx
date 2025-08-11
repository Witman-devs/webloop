import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import { SoundProvider } from "./SoundContext";
import { BrowserRouter, Route, Routes } from "react-router";
import MainMenu from "./MainMenu.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";
Modal.setAppElement("#root");

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: red[900],
          cursor: "pointer",
          textDecoration: "underline",
          textDecorationColor: red[900],
          "&:hover": {
            color: red[700],
            textDecorationColor: red[700],
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SoundProvider>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<App />} />
          </Routes>
        </SoundProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
