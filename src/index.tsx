import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import * as serviceWorker from "./devServiceWorker";
import theme from "./service/theme";
import {ContextProviders} from "./context/context-providers";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ContextProviders>
                <App/>
            </ContextProviders>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.register();
