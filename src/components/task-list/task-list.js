import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {


    render() {
        const {callback, todos} = this.props;

        const callbackHandler = (task) => {
            callback(task);
        };

        console.log(todos);
        return (
            <List>
                {todos.map((task, index) => {
                    return (
                        <TaskElement key={index} index={task.key} label={task.label} isChecked={task.isChecked}
                                     callback={callbackHandler}/>
                    )
                })}
            </List>
        );
    }
}

export default TaskList;