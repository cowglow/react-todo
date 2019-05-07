import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';

import logo from '../../assets/images/logo.svg';
import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count";

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
        // border: 'thin solid red',
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

    constructor() {
        super();
        this.state = {
            taskCollection: [{
                label: 'default task',
                isChecked: false
            }],
            tasksCompleted: 0
        };
    }

    render() {
        const {classes} = this.props;
        const {taskCollection, tasksCompleted} = this.state;

        // const taskCount = this.state.taskCollection.length;

        const createNewTask = (taskObject) => {
            let newTaskCollection = this.state.taskCollection;
            newTaskCollection.push(taskObject);
            this.setState(state => ({
                taskCollection: newTaskCollection
            }));

            console.log(this.state)
        };

        const updateTasks = (newProps) => {
            const completedTasks = newProps.filter((task) => task.isChecked).length;
            this.setState({
                taskCollection: newProps,
                tasksCompleted: completedTasks
            });
        };

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
                    <TaskMaker label="TaskMaker Label" callback={createNewTask}/>
                    <TaskList todos={taskCollection} callback={updateTasks}/>
                </main>

                {/* FOOTER */}
                <footer className={classes.footer}>
                    <TaskCount count={taskCollection.length} completedCount={tasksCompleted}/>
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
