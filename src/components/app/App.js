import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, IconButton, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';
import logo from '../../assets/images/logo.svg';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        textAlign: 'left',
        backgroundColor: theme.palette.primary.dark
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    main: {
        border: 'thin solid red',
        flex: '1 0 auto',
    },
    footer: {
        position: 'absolute',
        width: '100%',
        padding: '15px',
        bottom: '0'
    },
    icon: {
        width: '3em'
    },
});

class App extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                {/* HEADER */}
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        {/*TODO: Change position to right*/}
                        <Typography variant="h6" color="inherit">cowglow/react-todo</Typography>
                        <img src={logo} className={classes.icon} alt="logo"/>
                    </Toolbar>
                </AppBar>

                {/* MAIN */}
                <main className={classes.main}>
                    <Typography variant="body1">WIP: Building the Components</Typography>
                </main>

                {/* FOOTER */}
                <footer className={classes.footer}>
                    <Typography variant="subtitle2">Made with ReactJS and Material-UI.</Typography>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
