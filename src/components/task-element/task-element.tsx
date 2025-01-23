import {useTasks} from "../../context/tasks-context/tasks-context";
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@mui/material";

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
                                    }: TaskElementProps) {
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
            <ListItemIcon>
                <Checkbox
                    id={`task-${index}-checkbox`}
                    checked={isChecked}
                    inputProps={{"aria-label": "Checkbox A"}}
                    size="small"
                />
            </ListItemIcon>
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
