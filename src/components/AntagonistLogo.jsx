import { Link } from '@mui/material';
import logo from '../assets/anagonistLogo.png';

export default function AntagonistLogo({size="200px", style={}, setPageName}){
    return(
        <>
        <Link component="image" onClick={()=>setPageName("home")} style={{cursor:"pointer"}}>
            <img src={logo} height={size} width={size} style={style}/>
        </Link>
        </>
    )
} 