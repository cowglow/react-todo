import {createMuiTheme} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// Theme color palette
const theme = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700]
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[500]
        },
        tertiary: {
            light: purple[800]
        }
    },
    typography: {
        useNextVariants: true
    },
});

export default theme;