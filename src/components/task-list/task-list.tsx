import React from "react";
import List from "@material-ui/core/List";
import TaskElement from "../task-element/task-element";

interface TaskListProps {
  todos: Task[];
}

const TaskList: React.FC<TaskListProps> = ({todos}) => {
  return (
      <List>
        {todos.map((task, index) => (
            <div key={task.key}>
              <TaskElement
                  index={index}
                  taskKey={task.key}
                  label={task.label}
                  isChecked={task.isChecked}
              />
            </div>
        ))}
      </List>
  );
};

export default TaskList;
