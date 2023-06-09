import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { OutlinedInput } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { map } from "lodash";

//icons
import SearchIcon from "@mui/icons-material/Search";

// components
import { sidebarConfigue } from "../configue/sidebarConfigue";
import UserCard from "./UserCard";
import { userConfigue, UserData } from "../configue/userConfigue";
import { colors } from "../theme/colors";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [userList, setUserList] = useState<UserData[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [sideBarLabel, setSideBarLabel] = useState<string>("Team Members");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // handling sidebar label click
  const handleListItem = (e: any, labelVal: string): void => {
    e.stopPropagation();
    setSideBarLabel(labelVal);
  };

  // filtering the userlist depends upon the user name enter in the searchbar
  const updateCountryList = () => {
    const filterCountList = userConfigue?.filter(({ name }) => {
      return name.toLowerCase().includes(userName);
    });
    setUserList(filterCountList);
  };

  useEffect(() => {
    updateCountryList();
  }, [userName]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ pr: 2 }}>
        {map(sidebarConfigue, ({ label, Icon }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={
                sideBarLabel === label
                  ? {
                      bgcolor: colors.blue,
                      borderRadius: "0 8px 8px  0",
                      color: `${colors.white} !important`,
                    }
                  : null
              }
              onClick={(e) => handleListItem(e, label)}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                sx={
                  sideBarLabel === label
                    ? {
                        "&.MuiListItemText-root .MuiTypography-body2": {
                          color: `${colors.white} !important`,
                        },
                      }
                    : null
                }
                primary={label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ bgcolor: colors.white }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontWeight={700} variant="h6" color={colors.text}>
            {sideBarLabel}
          </Typography>
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <OutlinedInput
              data-testid="searchBar"
              type="search"
              placeholder="Search.."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              endAdornment={userName ? null : <SearchIcon />}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <UserCard userList={userList} />
      </Box>
    </Box>
  );
}
