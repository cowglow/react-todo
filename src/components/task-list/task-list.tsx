import React from "react";
import {Box, List} from "@mui/material";
import TaskElement from "../task-element/task-element";

interface TaskListProps {
    todos: Task[];
}

const TaskList: React.FC<TaskListProps> = ({todos}) => {
    return (
        <Box maxHeight="100%" overflow="hidden">
            <List disablePadding>
                {todos.map((task, index) => (
                    <TaskElement
                        key={task.key}
                        index={index}
                        taskKey={task.key}
                        label={task.label}
                        isChecked={task.isChecked}
                    />
                ))}
            </List>
        </Box>
    );
};

export default TaskList;
