import React from "react";

import TaskElement from "./task-element";

export default {
  title: "Components|TaskElement",
  component: TaskElement,
};

export const TaskElementStory = () => {
  const task: Task = {
    key: 123456789,
    label: "Task Element Component",
    isChecked: false,
  };

  return (
      <TaskElement
          index={1}
          taskKey={task.key}
          label={task.label}
          isChecked={task.isChecked}
      />
  );
};
