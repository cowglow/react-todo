import {PropsWithChildren, useState} from "react";
import {AppBar, IconButton, SwipeableDrawer, Toolbar, Typography} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
// @ts-ignore
import logo from "../../assets/images/logo.svg"
import AppNavigation from "../app-navigation/app-navigation";
import {Branding, StyledAppBarOffset, StyledAppHeaderContent} from "./app-header.style.ts";

export default function AppHeader({children}: PropsWithChildren) {
    const [state, setState] = useState<DrawerState>(false);

    const toggleDrawer = (drawerState: DrawerState) => (
        event: MouseEvent | KeyboardEvent
    ) => {
        if (
            (event.type === "keydown" &&
                (event as KeyboardEvent).key === "Tab") ||
            (event as KeyboardEvent).key === "Shift"
        ) {
            return;
        }
        setState(drawerState);
    };

    return [
        <AppBar key="app-bar" position="absolute">
            <Toolbar>
                <label htmlFor="toolbarButton">
                    {/*//@ts-ignore */}
                    <IconButton
                        color="inherit"
                        aria-label="Open Menu"
                        onClick={toggleDrawer(!state)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </label>
                <Branding src={logo} alt="react logo"/>
                <Typography variant="h6" color="inherit" noWrap>
                    cowglow/react-todo
                </Typography>
                <StyledAppHeaderContent>
                    {children}
                </StyledAppHeaderContent>
            </Toolbar>
            <SwipeableDrawer
                open={state}
                //@ts-ignore
                onClose={toggleDrawer(false)}
                //@ts-ignore
                onOpen={toggleDrawer(true)}
            >
                {/*//@ts-ignore */}
                <AppNavigation onClose={toggleDrawer}/>
            </SwipeableDrawer>
        </AppBar>,
        <StyledAppBarOffset key="app-bar-offset"/>
    ];
}
