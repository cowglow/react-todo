import React from "react";

// @ts-ignore
// import logo from "../../assets/images/logo.svg"
import AppNavigation from "../app-navigation/app-navigation";
import {AppBar, IconButton, SwipeableDrawer, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";

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
          {/*<img src={logo} className={classes.icon} alt="logo" />*/}
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

export default AppHeader;
