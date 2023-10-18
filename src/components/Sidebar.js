import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  styled,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const CustomListItemIcon = styled(ListItemIcon)(({theme}) => ({
  [theme.breakpoints.down("md")]: {
    minWidth: '30px'
  },
})) 

const CustomListItemButton = styled(ListItemButton)(({theme}) => ({
  borderRadius: theme.shape.borderRadius
}))

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#home">
              <CustomListItemIcon>
                <Home />
              </CustomListItemIcon>
              <ListItemText primary="Homepage" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <Article />
              </CustomListItemIcon>
              <ListItemText primary="Pages" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <Group />
              </CustomListItemIcon>
              <ListItemText primary="Groups" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <Storefront />
              </CustomListItemIcon>
              <ListItemText primary="Marketplace" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <Person />
              </CustomListItemIcon>
              <ListItemText primary="Friends" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <Settings />
              </CustomListItemIcon>
              <ListItemText primary="Settings" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list">
              <CustomListItemIcon>
                <AccountBox />
              </CustomListItemIcon>
              <ListItemText primary="Profile" />
            </CustomListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <CustomListItemButton component="a" href="#simple-list" sx={{cursor: 'auto', '&:hover': {backgroundColor: 'transparent'}}}>
              <CustomListItemIcon>
                <ModeNight />
              </CustomListItemIcon>
              <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
            </CustomListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
