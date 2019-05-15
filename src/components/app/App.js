import React from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Button, Divider,
    IconButton, Link,
    SwipeableDrawer,
    Toolbar,
    Typography,
    withStyles
} from "@material-ui/core";
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
    drawer: {
        width: 250,
        padding: '0.5em',
        height: '100%',
    },
    header: {
        textAlign: 'left',
        backgroundColor: theme.palette.primary.dark,
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
        justifyContent: 'center',
    },
    stickyFooter: {
        backgroundColor: 'white',
        border: 'thin solid ' + theme.palette.primary.light,
        color: theme.palette.primary.main,
        position: 'fixed',
        padding: '0.5em',
        margin: '1rem',
        top: 'auto',
        left: '0',
        bottom: '0',
        right: '0',
    },
    icon: {
        width: '3em',
    },
    btnClearCompleted: {
        // border: 'thin solid green',
    }
});

class App extends React.Component {

    constructor(props) {
        super(props);

        // App data store
        let store = [];

        // Part of the offline strategies
        if (localStorage) {
            const storage = localStorage.getItem('todos');
            if (storage){
                store = JSON.parse(storage);
            }
        }

        // Initial state object
        let completedCount = (store) ? store.filter(task => !task.isChecked).length : 0;
        this.state = {
            taskCollection: store,
            tasksCompleted: completedCount,
            taskListFilter: null,
            drawerState: false
        };

        // Event bindings
        this.toggleTaskFilter = this.toggleTaskFilter.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.toggleToolbar = this.toggleToolbar.bind(this);
    }

    /* Create new task */
    createNewTask = (taskObject) => {
        let taskCollectionCopy = [];
        const {taskCollection, tasksCompleted} = this.state;

        if (taskObject) {
            taskCollectionCopy = taskCollection;

            // Add new task
            taskCollectionCopy.push(taskObject);

            // Update state
            this.setState({
                taskCollection: taskCollectionCopy,
                tasksCompleted: tasksCompleted + 1
            });

        }
    };

    /* Clear completed tasks */
    clearCompleted() {
        const {taskCollection} = this.state;

        // Apply filter
        const sanitizedTaskCollection = taskCollection.filter((task) => !task.isChecked);

        // Update state
        this.setState({
            taskCollection: sanitizedTaskCollection,
            tasksCompleted: sanitizedTaskCollection.length
        });
    };

    /* Update task collection */
    updateTasks = (taskDiff) => {
        if (taskDiff) {
            const {taskCollection} = this.state;

            // Apply changes
            taskCollection.forEach((task, index, collection) => {
                if (taskDiff.key === task.key) {
                    collection[index] = taskDiff;
                }
            });

            // Update state
            this.setState({
                taskCollection: taskCollection,
                tasksCompleted: taskCollection.filter(task => !task.isChecked).length
            });
        }
    };

    /* Toggle task filter */
    toggleTaskFilter(filterValue) {
        // Update state
        this.setState({
            taskListFilter: filterValue
        });
    };


    /* Toggle tool bar */
    toggleToolbar = (isOpen) => () => {
        // Update state
        this.setState({
            drawerState: isOpen
        })
    };


    /* * * * * * * * * * * * * * * * * * * */
    /* Offline Strategy                    */
    /* * * * * * * * * * * * * * * * * * * */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {taskCollection} = nextState;

        // Save to local storage
        if (localStorage) {
            localStorage.setItem('todos', JSON.stringify(taskCollection));
        }

        return true;
    }

    render() {
        const {classes} = this.props;
        const {taskCollection, tasksCompleted, taskListFilter, drawerState} = this.state;

        // TODO: Good candidate for refactoring
        /* Refactor START */
        let filteredTaskCollection = taskCollection;

        if (taskListFilter === 'completed') {
            filteredTaskCollection = taskCollection.filter(todo => todo.isChecked === true)
        }

        if (taskListFilter === 'active') {
            filteredTaskCollection = taskCollection.filter(todo => todo.isChecked === false)
        }
        /* END */

        return (
            <div className={classes.root}>
                {/* HEADER */}
                <AppBar position="static">
                    <Toolbar>
                        <label htmlFor="toolbarButton" onClick={this.toggleToolbar(!drawerState)}>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                        </label>
                        {/*TODO: Change position to right*/}
                        <Typography variant="h6" color="inherit">cowglow/react-todo</Typography>
                        <img src={logo} className={classes.icon} alt="logo"/>
                    </Toolbar>
                    <SwipeableDrawer
                        onClose={this.toggleToolbar(false)}
                        onOpen={this.toggleToolbar(true)}
                        open={this.state.drawerState}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleToolbar(false)}
                            onKeyDown={this.toggleToolbar(false)}
                            className={classes.drawer}
                        >
                            <Typography variant="h6">Todos Filter</Typography>
                            <Divider/>
                            <TaskToggle options={['all', 'active', 'completed']} initVal={this.state.taskListFilter}
                                        callback={this.toggleTaskFilter}/>
                            <div className={classes.stickyFooter}>
                                <Typography variant="subtitle2">Made with <br/>
                                    <Link href="https://reactjs.org/tutorial/tutorial.html"
                                          target="_blank"
                                          aria-label="ReactJS Tutorial Link">ReactJS</Link> &amp; <Link
                                        href="http://material-ui.com" target="_blank"
                                        aria-label="Material-UI for React">Material-UI</Link>
                                    <br/>
                                    <Link href="https://github.com/cowglow/react-todo" target="_blank"
                                          aria-label="View the source code on GitHub">GitHub Repo.</Link>
                                </Typography>
                            </div>
                        </div>
                    </SwipeableDrawer>
                </AppBar>

                {/* MAIN */}
                <main className={classes.main}>
                    <TaskMaker label="TaskMaker Label" callback={this.createNewTask}/>
                    <TaskList todos={filteredTaskCollection} callback={this.updateTasks}/>
                </main>

                {/* Controls */}
                <div className={classes.controls}>
                    <TaskCount count={tasksCompleted}/>
                    <Button variant="contained" color="primary" onClick={() => this.clearCompleted()}>Clear
                        completed</Button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
