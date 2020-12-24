import {createMuiTheme, ThemeOptions} from "@material-ui/core/styles/";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[500],
    },
  },
};

export default createMuiTheme(theme);
