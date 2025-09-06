import { Box, Grid, Typography } from "@mui/material";
import MonochromeButton from "./MonochromeButton";

export default function DataController() {
    
    const clearProgress = () => {
        let masterVolume = localStorage.getItem("masterVolume");
        let sfxVolume = localStorage.getItem("sfxVolume");
        let musicVolume = localStorage.getItem("musicVolume");
        localStorage.clear();
        localStorage.setItem("masterVolume", masterVolume);
        localStorage.setItem("sfxVolume", sfxVolume);
        localStorage.setItem("musicVolume", musicVolume);
        window.location.reload();
    }

    return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Data Settings
      </Typography>

      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        marginBottom={2}
      >
        <Grid container direction="row" size={12} justifyContent="center">
            <MonochromeButton onClick={clearProgress}>Clear Progress</MonochromeButton>
      </Grid>
      </Grid>
    </Box>
  );
}
