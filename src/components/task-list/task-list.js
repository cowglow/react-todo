import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {

    state = {
        todos: []
    };


    render() {
        const {todos, callback} = this.props;

        const callbackHandler = (event) => {
            // this.setState(state => ({
            //     todos: [..., this]
            // }));

            console.log('event', event);
            callback(todos);
        };

        return (
            <List onChange={callback}>
                {todos.map((task, index) => (
                    <TaskElement index={index} label={task.label} checked={task.isChecked} callback={callbackHandler}/>
                ))}
            </List>
        );
    }
}

export default TaskList;