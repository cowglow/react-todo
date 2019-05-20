import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    Button,
    Divider,
    IconButton,
    Link,
    SwipeableDrawer,
    Toolbar,
    Typography,
    withStyles
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';

import logo from '../../assets/images/logo.svg';
import styles from './App.styles';

import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count";
import TaskToggle from "../task-toggle/task-toggle";

const App = (props) => {

    // App data store
    let store = [];

    // Part of the offline strategies
    if (localStorage) {
        const storage = localStorage.getItem('todos');
        if (storage) {
            store = JSON.parse(storage);
        }
    }

    // Initial state object
    const completedCount = (store) ? store.filter(task => !task.isChecked).length : 0;

    const [taskCollection, setTaskCollection] = useState(store);
    const [tasksCompleted, setTasksCompleted] = useState(completedCount);
    const [taskListFilter, setTaskListFilter] = useState(null);
    const [drawerState, setDrawerState] = useState(false);


    // Event bindings
    // this.toggleTaskFilter = this.toggleTaskFilter.bind(this);
    // this.clearCompleted = this.clearCompleted.bind(this);
    // this.toggleToolbar = this.toggleToolbar.bind(this);

    /* Create new task */
    const createNewTask = (taskObject) => {
        let taskCollectionCopy = [];

        if (taskObject) {
            // TODO: shallow copy
            taskCollectionCopy = taskCollection;

            // Add new task
            taskCollectionCopy.push(taskObject);

            // Update state
            setTaskCollection(taskCollectionCopy);
            setTasksCompleted(tasksCompleted + 1);
        }

        saveToLocalStorage(taskCollectionCopy)
    };

    /* Clear completed tasks */
    const clearCompleted = () => {
        // Apply filter
        const sanitizedTaskCollection = taskCollection.filter((task) => !task.isChecked);

        // Update state
        setTaskCollection(sanitizedTaskCollection);
        setTasksCompleted(sanitizedTaskCollection.length);

        saveToLocalStorage(sanitizedTaskCollection);
    };

    /* Update task collection */
    const updateTasks = (taskDiff) => {
        if (taskDiff) {
            // Apply changes
            taskCollection.forEach((task, index, collection) => {
                if (taskDiff.key === task.key) {
                    collection[index] = taskDiff;
                }
            });

            // Update state
            setTaskCollection(taskCollection);
            setTasksCompleted(taskCollection.filter(task => !task.isChecked).length);

            saveToLocalStorage(taskCollection);
        }
    };

    /* Toggle task filter */
    const toggleTaskFilter = (filterValue) => {
        // Update state
        setTaskListFilter(filterValue);
    };


    /* Toggle tool bar */
    const toggleToolbar = (isOpen) => () => {
        // Update state
        setDrawerState(isOpen);
    };


    /* * * * * * * * * * * * * * * * * * * */
    /* Offline Strategy                    */
    /* * * * * * * * * * * * * * * * * * * */
    const saveToLocalStorage = (collection) => {
        // Save to local storage
        if (localStorage) {
            localStorage.setItem('todos', JSON.stringify(collection));
        }
    };

    const {classes} = props;

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
                    <label htmlFor="toolbarButton" onClick={toggleToolbar(!drawerState)}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                    </label>
                    {/*TODO: Change position to right*/}
                    <Typography variant="h6" color="inherit">cowglow/react-todo</Typography>
                    <img src={logo} className={classes.icon} alt="logo"/>
                </Toolbar>
                <SwipeableDrawer
                    onClose={toggleToolbar(false)}
                    onOpen={toggleToolbar(true)}
                    open={drawerState}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleToolbar(false)}
                        onKeyDown={toggleToolbar(false)}
                        className={classes.drawer}
                    >
                        <Typography variant="h6">Todos Filter</Typography>
                        <Divider/>

                        {/*Task Toggle*/}
                        <TaskToggle options={['all', 'active', 'completed']} initVal={taskListFilter}
                                    callback={toggleTaskFilter}/>

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
                <TaskMaker label="TaskMaker Label" callback={createNewTask}/>
                <TaskList todos={filteredTaskCollection} callback={updateTasks}/>
            </main>

            {/* Controls */}
            <div className={classes.controls}>
                <TaskCount count={tasksCompleted}/>
                <Button variant="contained" color="primary" onClick={clearCompleted}>Clear
                    completed</Button>
            </div>
        </div>
    );

};

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
