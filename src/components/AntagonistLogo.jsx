import { Link } from "@mui/material";
import logo from "../assets/anagonistLogo.png";
// import home_sfx from '../assets/sfx/home.mp3';
import { useSound } from "../hook/SoundContext"; // Assuming you save the above code in SoundContext.js
import { MUSIC_TITLE } from "../consts";

export default function AntagonistLogo({
  size = "200px",
  style = {filter: 'grayscale(100%) brightness(0) sepia(100%) hue-rotate(180deg)'},
  setPageName,
}) {
  const { playSFXMusic } = useSound();

  const sendHome = () => {
    playSFXMusic(MUSIC_TITLE.Home);
    setPageName("home");
  };

  return (
    <>
      <Link component="a" onClick={sendHome} style={{ cursor: "pointer" }}>
        <img src={logo} height={size} width={size} style={style} />
      </Link>
    </>
  );
}
