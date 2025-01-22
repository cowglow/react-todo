import {Checkbox, ListItem, ListItemText} from "@mui/material";

import {useTasks} from "../../context/tasks-context/tasks-context";

interface TaskElementProps {
    index: number;
    taskKey: number;
    label: string;
    isChecked: boolean;
}

export default function TaskElement({
                                        index,
                                        taskKey,
                                        label,
                                        isChecked,
                                    }: TaskElementProps){
    const {updateTask} = useTasks();

    const clickHandler = () => {
        updateTask({
            key: taskKey,
            label,
            isChecked: !isChecked,
        });
    };

    return (
        <ListItem dense component="button" onClick={clickHandler}>
            <Checkbox
                id={`task-${index}-checkbox`}
                checked={isChecked}
                inputProps={{"aria-label": "Checkbox A"}}
                size="small"
            />
            <ListItemText
                primary={label}
                style={{
                    textDecoration: isChecked ? "line-through" : "none",
                }}
            />
        </ListItem>
    );
}
;
