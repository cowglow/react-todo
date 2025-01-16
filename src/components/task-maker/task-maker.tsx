import React from "react";
import {getRandomPlaceholderText} from "../../lib/get-random-placeholder-text/get-random-placeholder-text";
import {TextField} from "@mui/material";

interface TaskMakerProps {
    createTask: any;
}

const TaskMaker: React.FC<TaskMakerProps> = ({createTask}) => {
    const placeholderText = getRandomPlaceholderText();
    const [value, setValue] = React.useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    const keyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            if (value.length > 0) {
                createTask({
                    label: value,
                    isChecked: false,
                });
                setValue("");
            }
        }
    };

    return (
        <TextField
            id="task-maker"
            variant="outlined"
            value={value}
            placeholder={placeholderText}
            slotProps={{htmlInput: {"arial-label": "task maker text field"}}}
            onKeyDown={keyDownHandler}
            onChange={changeHandler}
            fullWidth={true}
            autoFocus
        />
    );
};

export default TaskMaker;
