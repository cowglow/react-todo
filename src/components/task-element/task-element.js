import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

import styles from './task-element.module.css';

const TaskElement = ({index, label, isChecked, callback}) => {

    const clickHandler = () => {
        callback({
            key: index,
            label: label,
            isChecked: !isChecked
        }, index);
    };

    return (
        <ListItem dense button onClick={clickHandler}>
            <Checkbox id={'check' + index} checked={isChecked} inputProps={{'arial-label': label}}/>
            <ListItemText primary={label}
                          className={(isChecked ? styles.completedTask : styles.uncompletedTask)}/>
        </ListItem>
    );
};

export default TaskElement;