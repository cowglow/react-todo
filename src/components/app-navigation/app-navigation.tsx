import React from "react";
import {Box, Divider, IconButton, List, ListItem, ListItemText, Typography} from "@mui/material";
import NavigationFooter from "../navigation-footer/navigation-footer";
import { useTasks } from "../../context/tasks-context/tasks-context";
import {Close as CloseIcon} from "@mui/icons-material";

interface AppNavigationProps {
  onClose: (drawerState: DrawerState) => (event: React.MouseEvent) => void;
}

const AppNavigation: React.FC<AppNavigationProps> = ({ onClose }) => {
  const { setFilter } = useTasks();
  return (
    <nav style={{ width: 250 }}>
      <IconButton
        color="inherit"
        aria-label="Close Menu"
        onClick={onClose(false)}
      >
        <CloseIcon />
      </IconButton>
      <Box m={1}>
        <Typography variant="h6">Filter</Typography>
        <Divider />
        <List>
          <ListItem component="button" onMouseDown={() => setFilter("all")}>
            <ListItemText primary="All" onClick={onClose(false)} />
          </ListItem>
          <ListItem component="button" onMouseDown={() => setFilter("active")}>
            <ListItemText primary="Active" onClick={onClose(false)} />
          </ListItem>
          <ListItem component="button" onMouseDown={() => setFilter("completed")}>
            <ListItemText primary="Completed" onClick={onClose(false)} />
          </ListItem>
        </List>
      </Box>
      <NavigationFooter />
    </nav>
  );
};

export default AppNavigation;
