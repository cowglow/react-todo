import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {

    render() {
        const {callback, todos, filter} = this.props;

        let listItems = todos;

        if (filter === 'completed') {
            listItems = todos.filter(todo => todo.isChecked === true)
        }

        if (filter === 'active') {
            listItems = todos.filter(todo => todo.isChecked === false)
        }

        const callbackHandler = (task, index) => {
            console.log('task:', task);
            console.log('index:', index);

            todos[index] = task;
            callback(todos);
        };

        return (
            <List>
                {listItems.map((task, index) => {
                    return (
                        <TaskElement key={index} index={index} label={task.label} isChecked={task.isChecked}
                                     callback={callbackHandler}/>
                    )
                })}
            </List>
        );
    }
}

export default TaskList;