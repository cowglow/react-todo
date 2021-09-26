import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NavigationFooter from "../navigation-footer/navigation-footer";
import { useTasks } from "../../context/tasks-context/tasks-context";

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
          <ListItem button onMouseDown={() => setFilter("all")}>
            <ListItemText primary="All" onClick={onClose(false)} />
          </ListItem>
          <ListItem button onMouseDown={() => setFilter("active")}>
            <ListItemText primary="Active" onClick={onClose(false)} />
          </ListItem>
          <ListItem button onMouseDown={() => setFilter("completed")}>
            <ListItemText primary="Completed" onClick={onClose(false)} />
          </ListItem>
        </List>
      </Box>
      <NavigationFooter />
    </nav>
  );
};

export default AppNavigation;
