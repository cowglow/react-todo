import React from 'react';
import {List} from "@material-ui/core";
import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {
    render() {
        const {todos} = this.props;
        return (
            <List>
                {todos.map((label, index) => (
                    <TaskElement index={index} label={label}/>
                ))}
            </List>
        );
    }
}

export default TaskList;