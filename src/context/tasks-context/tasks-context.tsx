import React from "react";
import { useLocalStorage } from "../../hook/use-local-storage";

/** Context **/
interface TasksContextProps {
  tasks: Task[];
  completed: number;
}

interface TasksContextApi extends TasksContextProps {
  createTask: (task: Partial<Task>) => void;
  updateTask: (taskDiff: Task) => void;
  setFilter: (filter: TaskFilter) => void;
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
  setFilter: () => {
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
    defaultValue: defaultValue ?? [],
  });

  const [tasks, setTasks] = React.useReducer(
    (state: any, action: { type: string; payload: any }) => {
      switch (action.type) {
        case "ADD_TASK":
          return [...state, action.payload];
        case "UPDATE_TASK":
          return state.map(
            (currentTask: Task) =>
              [action.payload].find((task) => task.key === currentTask.key) ||
              currentTask
          );
        case "CLEAR_COMPLETED":
          return state.filter((task: Task) => !task.isChecked);
        default:
          return state;
      }
    },
    storage
  );

  const completed = tasks.filter((task: Task) => !task.isChecked).length;

  const [filter, setFilter] = React.useState("all");

  const filteredTasks = () => {
    switch (filter) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((todo: Task) => todo.isChecked);
      case "active":
        return tasks.filter((todo: Task) => !todo.isChecked);
    }
  };

  const createTask = (newTask: Partial<Task>) => {
    setTasks({
      type: "ADD_TASK",
      payload: {
        ...newTask,
        key: new Date().getTime(),
      },
    });
  };

  const updateTask = (taskDiff: Task) => {
    if (taskDiff) {
      setTasks({
        type: "UPDATE_TASK",
        payload: taskDiff,
      });
    }
  };

  const clearCompleted = () => {
    setTasks({
      type: "CLEAR_COMPLETED",
      payload: null,
    });
  };

  React.useEffect(() => {
    setStorage(tasks);
  }, [setStorage, tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks(),
        completed,
        createTask,
        updateTask,
        setFilter,
        clearCompleted,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

/** Hook **/
export const useTasks = () => {
  return React.useContext(TasksContext);
};
