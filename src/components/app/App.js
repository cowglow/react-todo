import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Button, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
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
        flex: '1 0 auto',
    },
    controls: {
        // border: 'thin solid green',
        display: 'flex',
        justifyContent: 'space-around'
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
        // border: 'thin solid green',
    }
});

class App extends React.Component {

    constructor(props) {
        super(props);

        const repoData = [
            {key: 1, label: 'eat cake', isChecked: false},
            {key: 231, label: 'drink a shake', isChecked: true}
        ];

        this.state = {
            taskCollection: repoData,
            tasksCompleted: repoData.filter(task => task.isChecked === true).length,
            taskListFilter: null
        };

        this.toggleTaskFilter = this.toggleTaskFilter.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    /* Create new task */
    createNewTask = (taskObject) => {
        const {taskCollection} = this.state;
        let taskCollectionCopy = taskCollection;

        // Add new task
        taskCollectionCopy.push(taskObject);

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
            tasksCompleted: taskCollection.length - sanitizedTaskCollection.length
        });
    };

    /* Update task collection */
    updateTasks = (taskDiff) => {
        if (taskDiff) {
            const {taskCollection} = this.state;

            taskCollection.forEach((task, index, collection) => {
                if (taskDiff.key === task.key) {
                    collection[index] = taskDiff;
                }
            });

            this.setState({
                taskCollection: taskCollection,
                // TODO: Fix issues with taskCompleted count. The count is wrong when the toggle is not `all`
                tasksCompleted: taskCollection.filter(task => task.isChecked === true).length
            });
        }
    };


    /* Toggle task filter */
    toggleTaskFilter(filterValue) {
        this.setState({
            taskListFilter: filterValue
        });
    };

    render() {
        const {classes} = this.props;
        const {taskCollection, tasksCompleted, taskListFilter} = this.state;

        let filteredTaskCollection = taskCollection;

        if (taskListFilter === 'completed') {
            filteredTaskCollection = taskCollection.filter(todo => todo.isChecked === true)
        }

        if (taskListFilter === 'active') {
            filteredTaskCollection = taskCollection.filter(todo => todo.isChecked === false)
        }

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
                    <TaskList todos={filteredTaskCollection} callback={this.updateTasks}/>
                </main>

                {/* Controls */}
                <div className={classes.controls}>
                    <TaskCount count={taskCollection.length - tasksCompleted}/>
                    <TaskToggle options={['all', 'active', 'completed']} callback={this.toggleTaskFilter}/>
                    <Button variant="raised" color="primary" onClick={() => this.clearCompleted()}>Clear
                        completed</Button>
                </div>

                {/*FOOTER*/}
                <footer className={classes.stickyFooter}>
                    <Typography variant="overline">Made with ReactJS and Material-UI.</Typography>
                </footer>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
