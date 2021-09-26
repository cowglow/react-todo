import React from "react";
import withStyles from "./app-header.style";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/logo.svg";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import AppNavigation from "../app-navigation/app-navigation";

interface HeaderProps {
  classes: any;
}

const AppHeader: React.FC<HeaderProps> = ({ classes }) => {
  const [state, setState] = React.useState<DrawerState>(false);

  const toggleDrawer = (drawerState: DrawerState) => (
    event: React.MouseEvent | React.KeyboardEvent
  ) => {
    if (
      (event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab") ||
      (event as React.KeyboardEvent).key === "Shift"
    ) {
      return;
    }
    setState(drawerState);
  };

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <label htmlFor="toolbarButton">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open Menu"
              onClick={toggleDrawer(!state)}
            >
              <MenuIcon />
            </IconButton>
          </label>
          {/*TODO: Change position to right*/}
          <Typography variant="h6" color="inherit">
            cowglow/react-todo
          </Typography>
          <img src={logo} className={classes.icon} alt="logo" />
        </Toolbar>
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          className={classes.drawer}
        >
          <AppNavigation onClose={toggleDrawer} />
        </SwipeableDrawer>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(AppHeader);
