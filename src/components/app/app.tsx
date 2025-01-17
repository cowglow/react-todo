import React from "react";
import {Box, Button, Divider, Paper, Tab, Tabs} from "@mui/material";

import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count.tsx";
import {useTasks} from "../../context/tasks-context/tasks-context";
import Header from "../app-header/app-header";

export default function App() {
    const {tasks, completed, createTask, clearCompleted} = useTasks();
    const [tabIndex, setTabIndex] = React.useState(0);

    return (
        <Box display="flex" flexDirection="column" maxHeight="100dvh" height="100dvh" gap={1}>
            {/* HEADER */}
            <Header>
                <TaskCount count={completed}/>
            </Header>

            {/* MAIN */}
            <Tabs
                value={tabIndex}
                onChange={(_, index) => setTabIndex(index)}
                variant="fullWidth"
                textColor="inherit"
                indicatorColor="primary"
                sx={{
                    backgroundColor: "primary.main",
                    color: "white"
                }}
            >
                <Tab label="to-do" sx={{border: 1}}/>
                <Tab label="completed" sx={{border: 1}}/>
            </Tabs>
            <Paper component="main" sx={{flex: 1, overflow: "scroll"}}>
                <Box role="tabpanel" hidden={tabIndex !== 0}>
                    <TaskList todos={tasks.filter(task => !task.isChecked)}/>
                </Box>
                <Box role="tabpanel" hidden={tabIndex !== 1}>
                    <TaskList todos={tasks.filter(task => task.isChecked)}/>
                </Box>
            </Paper>
            {/* Controls */}
            <Paper sx={{px: 1, pb: 2, display: "flex", flexDirection: "column", gap: 1}}>
                <Divider/>
                <TaskMaker createTask={createTask}/>
                <Button variant="contained" color="primary" onClick={clearCompleted} fullWidth>
                    Clear completed
                </Button>
            </Paper>
        </Box>
    );
};
