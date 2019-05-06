import React from 'react';
import PropTypes from "prop-types";
import {Input, withStyles} from "@material-ui/core";

import styles from './task-maker.module.css';

class TaskMaker extends React.Component {
    changeHandler = (event) => {
        const {callback} = this.props;
        if (event.key === 'Enter') {
            const bindElement = document.getElementById('task-text');
            const taskTest = {
                label: bindElement.value,
                isChecked: false
            };

            // Reset
            bindElement.value = '';

            // Execute Callback
            callback(taskTest);
        }
    };

    currentValue = () => {
        return document.getElementById('task-text').value();
    };

    // TODO: Make an array of phrases that placeholder would randomly display.
    // ['What would you like to do next?','Type your task first, then manifest it!]
    render() {
        return (
            <div className={styles.root}>
                <Input
                    id="task-text"
                    type="text"
                    style={{size: '3em', padding: '1rem'}}
                    placeholder="What would you like to do next?"
                    inputProps={{'arial-label': 'Blank To Do Input'}}
                    onKeyDown={this.changeHandler}
                    fullWidth={true}
                />
            </div>
        );
    }
}

TaskMaker.propTypes = {
    label: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskMaker);