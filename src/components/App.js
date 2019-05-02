import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import {withStyles} from '@material-ui/core/styles';

import withRoot from '../withRoot';
import logo from '../assets/images/logo.svg';


const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
    container: {
        backgroundColor: '#555'
    }
});

class App extends React.Component {
    state = {
        checked: [0]
    };

    clickHandler = () => {
        alert('Working on it!')
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    cowglow/react-todo
                </Typography>
                <Typography variant={"subtitle1"} gutterBottom>
                    a simple react todo app, utilizing Material-UI
                </Typography>

               <div className={classes.container}>
                   <img src={logo} className={classes.icon} alt="logo"/>

                   <Button varient="contained" color="primary" onClick={this.clickHandler} className={classes.button}>
                       Click Me!
                   </Button>

                   <Link
                       component="button"
                       variant="body2"
                       onClick={this.clickHandler}
                   >
                       Button Link
                   </Link>
               </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
