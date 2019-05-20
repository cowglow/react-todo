import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Input} from "@material-ui/core";

// TODO: move to lib and test it.
function getRandomPlaceholderText() {
    const placeholderTextOptions = [
        'What would you like to do next?',
        'Type your task first, then manifest it!',
        'Put another on your plate!',
        'What\'s next to do?',
        'Any other duties?!',
        'You the boss, you know what to do!'
    ];

    const optionCount = placeholderTextOptions.length;
    const randomIndex = Math.floor(Math.random() * optionCount);

    return placeholderTextOptions[randomIndex];
}

const TaskMaker = ({callback, label}) => {

    const [placeholderText, setPlaceholderText] = useState(getRandomPlaceholderText());

    const changeHandler = (event) => {
        if (event.key === 'Enter') {
            const targetElement = event.target;

            if (targetElement.value.length > 0) {
                // Prep data
                const callbackArgs = {
                    key: new Date().getTime(),
                    label: targetElement.value,
                    isChecked: false
                };

                // Reset
                targetElement.value = '';

                // Update the placeholder text
                setPlaceholderText(getRandomPlaceholderText());

                // Execute Callback
                callback(callbackArgs);
            }
        }
    };

    return (
        <Input
            id="task-text"
            type="text"
            style={{size: '3em', boxSizing: 'border-box', padding: '1rem'}}
            placeholder={placeholderText}
            inputProps={{'arial-label': label}}
            onKeyDown={changeHandler}
            fullWidth={true}
        />
    );

};

TaskMaker.propTypes = {
    callback: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default TaskMaker;