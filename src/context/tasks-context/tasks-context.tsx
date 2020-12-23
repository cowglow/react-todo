import React from "react";
import {useLocalStorage} from "../../hook/use-local-storage";

/** Context **/
interface TasksContextProps {
  tasks: Task[];
  completed: number;
}

interface TasksContextApi extends TasksContextProps {
  createTask: (task: Partial<Task>) => void;
  updateTask: (taskDiff: Task) => void;
  clearCompleted: () => void;
}

const defaultValues: TasksContextApi = {
  tasks: [],
  completed: 0,
  createTask: () => {
    throw Error("createTask: UninitializedErrorMessage");
  },
  updateTask: () => {
    throw Error("updateTask: UninitializedErrorMessage");
  },
  clearCompleted: () => {
    throw Error("clearCompleted: UninitializedErrorMessage");
  },
};

const TasksContext = React.createContext<TasksContextApi>(defaultValues);

/** Provider **/
interface TasksContextProviderProps {
  children: React.ReactNode;
  defaultValue?: TasksContextProps;
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({
                                                                            children,
                                                                            defaultValue,
                                                                          }) => {
  const [storage, setStorage] = useLocalStorage({
    key: "todos",
    defaultValue: [],
  });

  const [tasks, setTasks] = React.useState(storage);

  const completed = tasks.filter((task: Task) => !task.isChecked).length;

  const createTask = (newTask: Partial<Task>) => {
    let mutation = tasks;
    const task = {
      ...newTask,
      key: new Date().getTime(),
    };

    mutation.push(task);

    // setTasks(mutation);
    setStorage(mutation);
  };

  const updateTask = (taskDiff: Task) => {
    if (taskDiff) {
      const mutation = tasks.map(
          (currentTask: Task) =>
              [taskDiff].find((task) => task.key === currentTask.key) || currentTask
      );
      setTasks(mutation);
      setStorage(mutation);
    }
  };

  const clearCompleted = () => {
    const mutation = tasks.filter((task: Task) => !task.isChecked);
    setTasks(mutation);
    setStorage(mutation);
  };

  return (
      <TasksContext.Provider
          value={{tasks, completed, createTask, updateTask, clearCompleted}}
      >
        {children}
      </TasksContext.Provider>
  );
};

/** Hook **/
export const useTasks = () => {
  return React.useContext(TasksContext);
};
