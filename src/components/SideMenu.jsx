import Drawer from '@mui/material/Drawer';
import { List, ListItem } from '@mui/material';

export default function SideMenu({sideMenuOpen, setSideMenuOpen, setEvidanceBoardOpen}){
    const handleClick = (item)=>{
        if(item=="evidanceBoard")
            setEvidanceBoardOpen(true);
        setSideMenuOpen(false);
    }
    return(
              <Drawer open={sideMenuOpen} onClose={()=>setSideMenuOpen(false)}>
          <List>
            <ListItem onClick={()=>handleClick("evidanceBoard")}>
              Evidance Board
            </ListItem>
            <ListItem>
              WebLoop history
            </ListItem>
            <ListItem>
              Special Items
            </ListItem>
            <ListItem>
              Exit
            </ListItem>
          </List>
      </Drawer>
    )
}