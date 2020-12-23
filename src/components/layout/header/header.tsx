import React from "react";
import withStyles from "./header.style";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import logo from "../../../assets/images/logo.svg";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Divider from "@material-ui/core/Divider";
// import TaskToggle from "../../task-toggle/task-toggle";
// import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";

interface HeaderProps {
  classes: any;
}

const Header: React.FC<HeaderProps> = ({classes}) => {
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
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <label htmlFor="toolbarButton">
            <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={toggleDrawer(!state)}
            >
              <MenuIcon/>
            </IconButton>
          </label>
          {/*TODO: Change position to right*/}
          <Typography variant="h6" color="inherit">
            cowglow/react-todo
          </Typography>
          <img src={logo} className={classes.icon} alt="logo"/>
        </Toolbar>
        <SwipeableDrawer
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            className={classes.drawer}
        >
          <h1>working on it</h1>
          {/*<div*/}
          {/*  tabIndex={0}*/}
          {/*  role="button"*/}
          {/*  onClick={setState(false)}*/}
          {/*  onKeyDown={setState(false)}*/}
          {/*  className={classes.drawer}*/}
          {/*>*/}
          {/*  <Typography variant="h6">Todos Filter</Typography>*/}
          {/*  <Divider />*/}

          {/*  /!*Task Toggle*!/*/}
          {/*  /!*<TaskToggle*!/*/}
          {/*  /!*  options={["all", "active", "completed"]}*!/*/}
          {/*  /!*  initVal={taskListFilter}*!/*/}
          {/*  /!*  onChange={toggleTaskFilter}*!/*/}
          {/*/>*/}

          {/*  <div className={classes.stickyFooter}>*/}
          {/*    <Typography variant="subtitle2">*/}
          {/*      Made with <br />*/}
          {/*      <Link*/}
          {/*        href="https://reactjs.org/tutorial/tutorial.html"*/}
          {/*        target="_blank"*/}
          {/*        aria-label="ReactJS Tutorial Link"*/}
          {/*      >*/}
          {/*        ReactJS*/}
          {/*      </Link>{" "}*/}
          {/*      &amp;{" "}*/}
          {/*      <Link*/}
          {/*        href="http://material-ui.com"*/}
          {/*        target="_blank"*/}
          {/*        aria-label="Material-UI for React"*/}
          {/*      >*/}
          {/*        Material-UI*/}
          {/*      </Link>*/}
          {/*      <br />*/}
          {/*      <Link*/}
          {/*        href="https://github.com/cowglow/react-todo"*/}
          {/*        target="_blank"*/}
          {/*        aria-label="View the source code on GitHub"*/}
          {/*      >*/}
          {/*        GitHub Repo.*/}
          {/*      </Link>*/}
          {/*    </Typography>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </SwipeableDrawer>
      </AppBar>
  );
};

export default withStyles(Header);
