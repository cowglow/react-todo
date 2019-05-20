import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

import styles from './task-element.module.css';

class TaskElement extends React.Component {

    state = {
        label: '',
        isChecked: false
    };

    clickHandler() {
        const {index, label, isChecked, callback} = this.props;
        callback({
            key: index,
            label: label,
            isChecked: !isChecked
        }, index);
    };

    render() {
        const {index, label, isChecked} = this.props;

        return (
            <ListItem dense button onClick={() => this.clickHandler()}>
                <Checkbox id={'check' + index} checked={isChecked} inputProps={{'arial-label': label}}/>
                <ListItemText primary={label}
                              className={(isChecked ? styles.completedTask : styles.uncompletedTask)}/>
            </ListItem>
        );
    }
}

export default TaskElement;