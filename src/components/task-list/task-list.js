import React from 'react';
import {List} from "@material-ui/core";
import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {

    render() {
        let {todos} = this.props;

        return (
            <List>
                {todos.map((task, index) => (
                    <TaskElement index={index} label={task.label} checked={task.isChecked}/>
                ))}
            </List>
        );
    }
}

export default TaskList;