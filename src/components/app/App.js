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
        position: 'relative',
        width: '100%',
        padding: '15px',
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
});

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            taskCollection: [],
            tasksCompleted: 0
        };
    }

    componentWillMount() {
        // const taskListResource = [
        //     {label: 'One', isChecked: false},
        //     {label: 'Two', isChecked: true},
        //     {label: 'Three', isChecked: false}
        // ];
        //
        // taskListResource.map(task => {
        //     this.createNewTask(task);
        // })
    }

    createNewTask = (taskLabel) => {

        console.log('trim', taskLabel.trim());

        let newTaskCollection = this.state.taskCollection;
        newTaskCollection.push({
            label: taskLabel,
            isChecked: false
        });

        this.setState({
            taskCollection: newTaskCollection
        });

    };

    clearCompleted = () => {
        const sanitizedTaskCollection = this.state.taskCollection.filter((task) => !task.isChecked);

        this.setState({
            taskCollection: sanitizedTaskCollection,
            tasksCompleted: 0,
            taskListFilter: 'all'
        });
    };


    updateTasks(newProps) {
        if (newProps) {
            const completedTasks = newProps.filter((task) => task.isChecked).length;
            this.setState({
                taskCollection: newProps,
                tasksCompleted: completedTasks
            });
        }
    };

    static toggleTask(mode) {
        console.log('toggle task mode:', mode);
    };

    render() {
        const {classes} = this.props;
        const {taskCollection, tasksCompleted, taskListFilter} = this.state;

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
                    <BottomNavigation>
                        <TaskCount count={taskCollection.length - tasksCompleted}/>
                        <TaskToggle options={'all|active|completed'} callback={App.toggleTask}/>
                        <Button color="primary" onClick={this.clearCompleted}>Clear completed</Button>
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
