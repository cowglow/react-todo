import React from "react";
import TaskList from "./task-list";

export default {
    title: "Components | TaskList",
    component: TaskList,
};

export const TaskListStory = () => (
    <TaskList
        todos={[
            {key: 1, label: "One", isChecked: false},
            {key: 2, label: "Two", isChecked: true},
            {key: 3, label: "Three", isChecked: false},
        ]}
    />
);
