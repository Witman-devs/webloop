import Drawer from "@mui/material/Drawer";
import { Link, List, ListItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { PAGE_TITLES } from "../consts";

export default function SideMenu({
  sideMenuOpen,
  setSideMenuOpen,
  History,
  goToPage,
}) {
  return (
    <Drawer open={sideMenuOpen} onClose={() => setSideMenuOpen(false)} sx={{ width: "500px" }}>
      <List style={{paddingLeft: "26px", paddingRight: "26px"}}>
        <ListItem>Last 10 Visited Pages</ListItem>
        {History.slice(-10).map((item, index) => (
          <Link sx={{ display: "block", paddingLeft: "26px", paddingRight: "26px" }} key={index} onClick={() => goToPage(item)}>
            {PAGE_TITLES[item]}
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
