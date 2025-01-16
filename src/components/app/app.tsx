import React from "react";
import {Box, Button, Paper} from "@mui/material";

import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count.tsx";
import {useTasks} from "../../context/tasks-context/tasks-context";
import Header from "../app-header/app-header";

const App: React.FC = () => {
    const {tasks, completed, createTask, clearCompleted} = useTasks();

    return (
        <Box display="flex" flexDirection="column" maxHeight="100dvh" height="100dvh" gap={2}>
            {/* HEADER */}
            <Header>
                <TaskCount count={completed}/>
            </Header>

            {/* MAIN */}
            <Paper component="main" sx={{flex: 1, mx: 2}}>
                <TaskMaker createTask={createTask}/>
                <TaskList todos={tasks}/>
            </Paper>

            {/* Controls */}
            <Box component="footer" px={2} pb={2}>
                <Button variant="contained" color="primary" onClick={clearCompleted} fullWidth>
                    Clear completed
                </Button>
            </Box>
        </Box>
    );
};

export default App;
