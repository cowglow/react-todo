import React, {PropsWithChildren} from "react";

// @ts-ignore
import logo from "../../assets/images/logo.svg"
import AppNavigation from "../app-navigation/app-navigation";
import {AppBar, Box, IconButton, SwipeableDrawer, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";

const AppHeader: React.FC<PropsWithChildren> = ({children}) => {
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
            <AppBar position="absolute">
                <Toolbar>
                    <label htmlFor="toolbarButton">
                        <IconButton
                            color="inherit"
                            aria-label="Open Menu"
                            onClick={toggleDrawer(!state)}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </label>
                    <img src={logo} width={48} height={48} alt="logo"/>
                    <Typography variant="h6" color="inherit">
                        cowglow/react-todo
                    </Typography>
                    <Box display="flex" flex={1} justifyContent="flex-end">
                        {children}
                    </Box>
                </Toolbar>
                <SwipeableDrawer
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <AppNavigation onClose={toggleDrawer}/>
                </SwipeableDrawer>
            </AppBar>
            <Box sx={{height: 56}}/>
        </React.Fragment>
    );
};

export default AppHeader;
