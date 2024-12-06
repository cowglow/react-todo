import React from "react";
import {Button} from "@mui/material";

import TaskMaker from "../task-maker/task-maker";
import TaskList from "../task-list/task-list";
import TaskCount from "../task-count/task-count.tsx";
import { useTasks } from "../../context/tasks-context/tasks-context";
// import Header from "../app-header/app-header";

interface AppProps {
  classes: any;
}

const App: React.FC<AppProps> = ({ classes }) => {
  const { tasks, completed, createTask, clearCompleted } = useTasks();

  return (
    <div className={classes.root}>
      {/* HEADER */}
      {/*<Header />*/}

      {/* MAIN */}
      <main className={classes.main}>
        <TaskMaker classes={{}} createTask={createTask} />
        <TaskList todos={tasks} />
      </main>

      {/* Controls */}
      <div className={classes.controls}>
        <TaskCount count={completed} />
        <Button variant="contained" color="primary" onClick={clearCompleted}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default App;
