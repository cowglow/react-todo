import React from 'react';
import {RadioGroup, FormControlLabel, Radio} from "@material-ui/core";

import styles from './task-toggle.module.css';

class TaskToggle extends React.Component {

    state = {
        options: [],
        mode: 0
    };

    componentWillMount() {
        let {options} = this.props;
        if (typeof options !== "object") {
            options = options.split('|');
        }

        this.setState({
            options: options,
            mode: options[0]
        });
    }

    clickHandler = (event, optionIndex) => {
        const {callback} = this.props;

        this.setState({
            options: this.state.options,
            mode: optionIndex
        });

        callback(optionIndex);
    };

    render() {
        const {options, mode} = this.state;

        return (
            <RadioGroup
                aria-label="toggle control"
                name="toggleControl"
                value={mode}
                onChange={this.clickHandler}
                className={styles.toggleButton}
            >
                {options.map((option, index) => {
                    const label = option.toUpperCase();
                    return (
                        <FormControlLabel
                            value={option}
                            control={<Radio color="primary"/>}
                            label={label}
                            // labelPlacement="bottom"
                        />)
                })}
            </RadioGroup>
        );
    }
}

export default TaskToggle;