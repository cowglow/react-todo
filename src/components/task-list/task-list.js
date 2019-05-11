import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {

    render() {
        const {todos, callback, filter} = this.props;

        let listItems = todos;

        if (filter === 'completed') {
            listItems = todos.filter(todo => todo.isChecked === true)
        }
        if (filter === 'active') {
            listItems = todos.filter(todo => todo.isChecked === false)
        }

        const callbackHandler = (task) => {
            // TODO: filter should update. Maybe it is a good idea to return the `todos` to a state instead of props

            todos[parseInt(task.index)] = task;
            callback(listItems);
        };


        return (
            <List>
                {listItems.map((task, index) => {
                    console.log(task);
                    return (
                        <TaskElement key={index} label={task.label} isChecked={task.isChecked}
                                     callback={callbackHandler}/>
                    )
                })}
            </List>
        );
    }
}

export default TaskList;