import { Link } from '@mui/material';
import logo from '../assets/anagonistLogo.png';
import home_sfx from '../assets/sfx/home.mp3';
import { useSound } from '../SoundContext'; // Assuming you save the above code in SoundContext.js


export default function AntagonistLogo({size="200px", style={}, setPageName}){
    const { getEffectiveVolume } = useSound();

  const link_hit = new Howl({
    src: [home_sfx],
    autoplay: false,
    loop: false,
    volume: getEffectiveVolume('sfx', 1), // Use the helper function to get effective volume
    // Preload to ensure it's ready before any fade operations
    preload: true
  });

  const sendHome = () => {
    link_hit.play(); // Play the sound effect
    setPageName("home");
  };  

    return(
        <>
        <Link component="image" onClick={sendHome} style={{cursor:"pointer"}}>
            <img src={logo} height={size} width={size} style={style}/>
        </Link>
        </>
    )
} 