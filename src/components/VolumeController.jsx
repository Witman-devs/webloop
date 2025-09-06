import { Slider, Typography, Stack, Box, Grid } from "@mui/material";
import { useSound } from "../hook/SoundContext";
import { MUSIC_TITLE } from "../consts";
import { Bell, Music, Music4 } from "lucide-react";

export default function VolumeController() {
  const {
    masterVolume,
    setMasterVolume,
    sfxVolume,
    setSfxVolume,
    musicVolume,
    setMusicVolume,
    playSFXMusic,
  } = useSound();

  const handleMasterVolumeChange = (event, newValue) => {
    setMasterVolume(newValue);
  };

  const handleSfxVolumeChange = (event, newValue) => {
    playSFXMusic(MUSIC_TITLE.MinorLink);
    setSfxVolume(newValue);
  };

  const handleMusicVolumeChange = (event, newValue) => {
    setMusicVolume(newValue);
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: "50vh",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Audio Settings
      </Typography>

      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        marginBottom={2}
      >
        <Grid container direction="row" size={12} justifyContent="end">
          <Grid size={2}>
            <Typography variant="subtitle1">
              <Music /> Master Volume
            </Typography>
          </Grid>
          <Grid size={8}>
            <Slider
              aria-label="Master Volume"
              value={masterVolume}
              onChange={handleMasterVolumeChange}
              min={0}
              max={1}
              step={0.01}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${parseInt(value * 100)}`}
              color="black"
            />
          </Grid>
          <Grid size={1}>
            <Typography variant="subtitle1">
              {parseInt(masterVolume * 100)}
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" size={12} justifyContent="end">
          <Grid size={2}>
            <Typography variant="subtitle1">
              <Bell /> SFX Volume
            </Typography>
          </Grid>
          <Grid size={8}>
            <Slider
              aria-label="SFX Volume"
              value={sfxVolume}
              onChange={handleSfxVolumeChange}
              min={0}
              max={1}
              step={0.1}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${parseInt(value * 100)}`}
              color="black"
            />
          </Grid>
          <Grid size={1}>
            <Typography variant="subtitle1">
              {parseInt(sfxVolume * 100)}
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" size={12} justifyContent="end">
          <Grid size={2}>
            <Typography variant="subtitle1">
              <Music4 /> Music Volume
            </Typography>
          </Grid>
          <Grid size={8}>
            <Slider
              aria-label="Music Volume"
              value={musicVolume}
              onChange={handleMusicVolumeChange}
              min={0}
              max={1}
              step={0.01}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${parseInt(value * 100)}`}
              color="black"
            />
          </Grid>
          <Grid size={1}>
            <Typography variant="subtitle1">
              {parseInt(musicVolume * 100)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
