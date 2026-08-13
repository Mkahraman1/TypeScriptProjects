import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,

        "& .MuiDrawer-paper": {
          width: 240,
          top: 64,
          height: "calc(100% - 64px)",
        },
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>

          <ListItemText primary="Kullanıcılar" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>

          <ListItemText primary="Ürünler" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Ayarlar" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;