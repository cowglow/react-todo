import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./components/app/app.tsx";
import theme from "./service/theme.ts";
import {ContextProviders} from "./context/context-providers.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ContextProviders>
                <App classes={{
                    root: "root",
                    main: 'main',
                    controls: 'controls',
                }}/>
            </ContextProviders>
        </ThemeProvider>
    </StrictMode>,
);
