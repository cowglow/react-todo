import React from 'react';
import {RadioGroup, FormControlLabel, Radio} from "@material-ui/core";

class TaskToggle extends React.Component {

    state = {
        selectedValue: null
    };

    componentWillMount() {
        const {options} = this.props;

        this.setState({
            selectedValue: options[0]
        });
    }

    clickHandler = (selectedValue) => {
        const {callback} = this.props;

        this.setState({
            selectedValue: selectedValue,
        });

        callback(selectedValue);
    };

    render() {
        const {options} = this.props;
        const {selectedValue} = this.state;

        return (
            <RadioGroup
                aria-label="toggle control"
                name="toggleControl"
                value={selectedValue}
                // row
            >
                {options.map((option, index) => {
                    const label = option.toUpperCase();
                    return (<FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio onChange={() => this.clickHandler(option)}
                                        checked={this.state.selectedValue === option} color="primary"/>}
                        label={label}
                        labelPlacement="right"
                    />)
                })}
            </RadioGroup>
        );
    }
}

export default TaskToggle;