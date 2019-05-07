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
        });
    }

    render() {
        const {callback} = this.props;
        const {todos} = this.state;

        const callbackHandler = (task) => {
            let newTodos = todos;
            newTodos[parseInt(task.index)] = task;

            this.setState({
                todos: newTodos
            });

            callback(todos);
        };

        return (
            <List onChange={callback}>
                {todos.map((task, index) => {
                    // console.log(index, task);
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