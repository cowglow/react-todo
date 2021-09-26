import React from "react";
import withStyles from "./task-maker.style";
import { getRandomPlaceholderText } from "../../lib/get-random-placeholder-text/get-random-placeholder-text";
import TextField from "@material-ui/core/TextField";

interface TaskMakerProps {
  classes: any;
  createTask: any;
}

const TaskMaker: React.FC<TaskMakerProps> = ({ classes, createTask }) => {
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
      inputProps={{ "arial-label": "task maker text field" }}
      onKeyDown={keyDownHandler}
      onChange={changeHandler}
      className={classes.root}
      fullWidth={true}
    />
  );
};

export default withStyles(TaskMaker);
