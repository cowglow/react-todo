import React, {useState} from 'react';
import PropTypes from "prop-types";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const TaskToggle = ({options, initVal, callback}) => {

    console.log('rendering task toggle', initVal);

    const [selectedValue, setSelectedValue] = useState((initVal) ? initVal : options[0]);

    const clickHandler = (newValue) => {
        setSelectedValue(newValue);
        callback(newValue);
    };

    return (
        <RadioGroup
            aria-label="toggle control"
            name="toggleControl"
            value={selectedValue}
            // row
        >
            {options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio onChange={() => clickHandler(option)}
                                    checked={selectedValue === option} color="primary"/>}
                    label={option}
                    labelPlacement="end"
                />
            ))}
        </RadioGroup>
    );
};

TaskToggle.propTypes = {
    callback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    initVal: PropTypes.string
};

export default TaskToggle;