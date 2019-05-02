import React from 'react';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseLine from '@material-ui/core/CssBaseline';

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
        }
    },
    typography: {
        useNextVariants: true
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseLine/>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }
    return WithRoot;
}

export default withRoot;