import React from "react";
import { Checkbox, ListItem, ListItemText } from "@mui/material";

import { useTasks } from "../../context/tasks-context/tasks-context";

interface TaskElementProps {
  index: number;
  taskKey: number;
  label: string;
  isChecked: boolean;
}

const TaskElement: React.FC<TaskElementProps> = ({
  index,
  taskKey,
  label,
  isChecked,
}) => {
  const { updateTask } = useTasks();

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
        id={"task-" + index + "-checkbox"}
        checked={isChecked}
        inputProps={{ "aria-label": "Checkbox A" }}
      />
      <ListItemText
        primary={label}
        style={{
          textDecoration: isChecked ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
};

export default TaskElement;
