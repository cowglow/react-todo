import React from "react";
import {Link, Typography} from "@mui/material";


interface NavigationFooterProps {
  classes: any;
}

const NavigationFooter: React.FC<NavigationFooterProps> = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="subtitle2">
      Made with <br />
      <Link
        href="https://reactjs.org/tutorial/tutorial.html"
        target="_blank"
        aria-label="ReactJS Tutorial Link"
      >
        ReactJS
      </Link>{" "}
      &amp;{" "}
      <Link
        href="http://material-ui.com"
        target="_blank"
        aria-label="Material-UI for React"
      >
        Material-UI
      </Link>
      <br />
      <Link
        href="https://github.com/cowglow/react-todo"
        target="_blank"
        aria-label="View the source code on GitHub"
      >
        GitHub Repo.
      </Link>
    </Typography>
  </div>
);

export default NavigationFooter;
