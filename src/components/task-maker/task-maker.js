import React from 'react';
import PropTypes from "prop-types";
import {Input, withStyles} from "@material-ui/core";

import styles from './task-maker.module.css';

class TaskMaker extends React.Component {

    // currentValue = () => {
    //     return document.getElementById('task-text').value();
    // };

    // TODO: Make an array of phrases that placeholder would randomly display.
    // ['What would you like to do next?','Type your task first, then manifest it!]
    render() {
        const {label} = this.props;

        const changeHandler = (event) => {
            if (event.key === 'Enter') {
                const {callback} = this.props;
                const bindElement = document.getElementById('task-text');

                const newTask = {
                    label: bindElement.value,
                    isChecked: false
                };

                // Reset
                bindElement.value = '';

                // Execute Callback
                callback(newTask);
            }
        };

        return (
            <div className={styles.root}>
                <Input
                    id="task-text"
                    type="text"
                    style={{size: '3em', padding: '1rem'}}
                    placeholder="What would you like to do next?"
                    inputProps={{'arial-label': label}}
                    onKeyDown={changeHandler}
                    fullWidth={true}
                />
            </div>
        );
    }
}

TaskMaker.propTypes = {
    label: PropTypes.string.isRequired,
};

export default withStyles(styles)(TaskMaker);