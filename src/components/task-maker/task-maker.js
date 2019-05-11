import React from 'react';
import PropTypes from "prop-types";
import {Input, withStyles} from "@material-ui/core";

import styles from './task-maker.module.css';

class TaskMaker extends React.Component {

    state = {
        placeholderText: ''
    };

    updatePlaceholderText() {

        const placeholderTextOptions = [
            'What would you like to do next?',
            'Type your task first, then manifest it!'
        ];

        const optionCount = placeholderTextOptions.length;
        const randomIndex = Math.floor(Math.random() * optionCount);

        this.setState({
            placeholderText: placeholderTextOptions[randomIndex]
        });
    }

    render() {
        const {label} = this.props;

        let {placeholderText} = this.state;
        if (placeholderText === '') {
            placeholderText = this.updatePlaceholderText()
        }

        const changeHandler = (event) => {
            if (event.key === 'Enter') {
                const bindedElement = event.target;
                const elementValue = event.target.value;

                const defaultValue = '';
                const {callback} = this.props;


                if (elementValue.length > 0) {
                    // Prep data
                    const callbackArgs = elementValue;

                    // Reset
                    bindedElement.value = defaultValue;

                    // Update the placeholder text
                    this.updatePlaceholderText();

                    // Execute Callback
                    callback(callbackArgs);
                }
            }
        };


        return (
            <div className={styles.root}>
                <Input
                    id="task-text"
                    type="text"
                    style={{size: '3em', padding: '1rem'}}
                    placeholder={placeholderText}
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