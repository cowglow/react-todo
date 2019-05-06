import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

import styles from './task-element.module.css';

class TaskElement extends React.Component {
    state = {
        isChecked: false
    };

    componentWillMount() {
        const {checked} = this.props;
        this.setState({isChecked: checked});
    }

    render() {
        const {label, index} = this.props;
        const {isChecked} = this.state;

        const clickHandler = () => {
            this.setState(state => {
                const checkboxValue = !state.isChecked;
                return {isChecked: checkboxValue};
            });

            // TODO: Must be a way to broadcast this message up to parent component
        };

        return (
            <ListItem key={index} dense button onClick={clickHandler}>
                <Checkbox checked={isChecked}/>
                <ListItemText primary={label}
                              className={(this.state.isChecked ? styles.completedTask : styles.uncompletedTask)}/>
            </ListItem>
        );
    }
}

export default TaskElement;