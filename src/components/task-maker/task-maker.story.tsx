import React from "react";
import TaskMaker from "./task-maker";
import { action } from "@storybook/addon-actions";

export default {
  name: "Components|TaskMaker",
  component: TaskMaker,
};

export const TaskMakerStory = () => (
  <TaskMaker createTask={action("create new task")} />
);
