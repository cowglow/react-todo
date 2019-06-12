import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

const TaskList = ({callback, todos}) => (
    <List>
        {
            todos.map((task, index) => (
                <TaskElement
                    key={index}
                    index={task.key}
                    label={task.label}
                    isChecked={task.isChecked}
                    callback={callback}
                />
            ))
        }
    </List>
);

const noop = () => {
};

TaskList.defaultProps = {
    todos: [],
    callback: noop,
};

export default TaskList;