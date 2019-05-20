import React from 'react';
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseLine from '@material-ui/core/CssBaseline';
import theme from './theme';

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