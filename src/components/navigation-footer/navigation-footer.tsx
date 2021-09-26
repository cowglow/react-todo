import React from "react";
import withStyles from "./navigation-footer.style";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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

export default withStyles(NavigationFooter);
