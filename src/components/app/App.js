import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, BottomNavigation, Button, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';

import logo from '../../assets/images/logo.svg';
import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count";
import TaskToggle from "../task-toggle/task-toggle";

// TODO: How does this get imported as a module
const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%'
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
        // border: 'thin solid red',
        flex: '1 0 auto',
    },
    footer: {
        border: 'thin solid yellow',
        display: 'flex',
        flexFlow: 'spaceAround'
    },
    stickyFooter: {
        backgroundColor: 'white',
        border: 'thin solid ' + theme.palette.primary.light,
        color: theme.palette.primary.main,
        position: 'fixed',
        textAlign: 'center',
        padding: '0.5em',
        margin: '1rem',
        top: 'auto',
        left: '0',
        bottom: '0',
        right: '0',
    },
    icon: {
        width: '3em'
    },
    btnClearCompleted: {
        border: 'thin solid green',
        padding: '0',
    }
});

class App extends React.Component {

    state = {
        taskCollection: [{label: 'eat cake', isChecked: false}, {label: 'drink a shake', isChecked: true}],
        tasksCompleted: 0,
        taskFilter: 'all'
    };

    /* Create new task */
    createNewTask = (taskLabel) => {
        const {taskCollection} = this.state;
        let taskCollectionCopy = taskCollection;

        // Add new task
        taskCollectionCopy.push({
            label: taskLabel,
            isChecked: false
        });

        // Update state
        this.setState({
            taskCollection: taskCollectionCopy
        });

    };

    /* Clear completed tasks */
    clearCompleted() {
        const {taskCollection} = this.state;
        const sanitizedTaskCollection = taskCollection.filter((task) => !task.isChecked);

        this.setState({
            taskCollection: sanitizedTaskCollection,
            tasksCompleted: 0,
            taskListFilter: 'all'
        });
    };

    /* Update task collection */
    updateTasks = (newProps) => {
        if (newProps) {
            this.setState({
                taskCollection: newProps,
                tasksCompleted: 0
            });
        }
    };


    render() {
        const {classes} = this.props;
        const {taskCollection, tasksCompleted, taskListFilter} = this.state;

        /* Toggle task filter */
        const toggleTaskFilter = (mode) => {
            console.log('mode:', mode);
            this.setState({
                taskListFilter: mode
            });
        };

        // TODO: figure out why the updating is getting stuck
        console.log('taskCollection', taskCollection);
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
                    <TaskMaker label="TaskMaker Label" callback={this.createNewTask}/>
                    <TaskList todos={taskCollection} callback={this.updateTasks} filter={taskListFilter}/>
                </main>

                {/* FOOTER */}
                <footer className={classes.footer}>
                    <BottomNavigation class={classes.footer}>
                        <TaskCount count={taskCollection.length - tasksCompleted}/>
                        <TaskToggle options={'all|active|completed'} callback={toggleTaskFilter} path="wow"/>
                        <div className={classes.btnClearCompleted}>
                            <Button color="primary" onClick={this.clearCompleted}>Clear completed</Button>
                        </div>
                    </BottomNavigation>

                    <div className={classes.stickyFooter}>
                        <Typography variant="overline">Made with ReactJS and Material-UI.</Typography>
                    </div>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
