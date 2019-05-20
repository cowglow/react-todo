import React from 'react';
import PropTypes from "prop-types";
import {Input} from "@material-ui/core";

class TaskMaker extends React.Component {

    state = {
        placeholderText: ''
    };

    updatePlaceholderText() {
        // TODO: make provider for this
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

        this.setState({
            placeholderText: placeholderTextOptions[randomIndex]
        });
    }

    render() {
        let {placeholderText} = this.state;

        const {label} = this.props;

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
                    const callbackArgs = {
                        label: elementValue,
                        isChecked: false,
                        key: new Date().getTime()
                    };

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
    }
}

TaskMaker.propTypes = {
    label: PropTypes.string.isRequired,
};

export default TaskMaker;