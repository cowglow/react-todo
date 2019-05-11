import React from 'react';
import {List} from "@material-ui/core";

import TaskElement from "../task-element/task-element";

class TaskList extends React.Component {

    state = {
        todos: []
    };

    componentWillMount() {
        const {todos} = this.props;
        this.setState({
            todos: todos
        })
    }

    render() {
        const {callback, filter} = this.props;
        const {todos} = this.state;

        let listItems = todos;

        if (filter === 'completed') {
            listItems = todos.filter(todo => todo.isChecked === true)
        }

        if (filter === 'active') {
            listItems = todos.filter(todo => todo.isChecked === false)
        }

        const callbackHandler = (task, index) => {
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