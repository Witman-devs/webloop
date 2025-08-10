import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function SideMenu({
  sideMenuOpen,
  setSideMenuOpen
}) {
  const [menuType, setMenuType] = useState("navigation");

  const handleKeyPress = useCallback(
    (event) => {
      event.preventDefault(); 
      if (event.ctrlKey && event.code === "KeyM") {
        setSideMenuOpen((prev) => !prev);
      }
    },
    [setSideMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Drawer open={sideMenuOpen} onClose={() => setSideMenuOpen(false)} sx={{ width: "500px" }}>
      <List>
        <ListItem>Visited Pages</ListItem>
      </List>
    </Drawer>
  );
}
