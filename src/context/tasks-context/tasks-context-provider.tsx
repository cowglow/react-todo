import { ReactNode, useEffect, useReducer, useState } from "react"
import { useLocalStorage } from "../../hook/use-local-storage.ts"
import {
  LOCALSTORAGE_KEY_TODOS,
  TASK_ACTIONS,
  TASK_FILTER,
} from "./lib/constants.ts"
import { TasksContext } from "./tasks-context.tsx"
import { TasksContextProps } from "./lib/types.ts"

interface TasksContextProviderProps {
  children: ReactNode
  defaultValue?: TasksContextProps
}

export function TasksContextProvider({
  children,
  defaultValue,
}: TasksContextProviderProps) {
  const [storage, setStorage] = useLocalStorage({
    key: LOCALSTORAGE_KEY_TODOS,
    defaultValue: defaultValue ?? [],
  })

  const [tasks, setTasks] = useReducer(
    (state: any, action: { type: string; payload: any }) => {
      switch (action.type) {
        case TASK_ACTIONS.ADD_TASK:
          return [...state, action.payload]
        case TASK_ACTIONS.UPDATE_TASK:
          return state.map(
            (currentTask: Task) =>
              [action.payload].find((task) => task.key === currentTask.key) ||
              currentTask
          )
        case TASK_ACTIONS.CLEAR_COMPLETED:
          return state.filter((task: Task) => !task.isChecked)
        default:
          return state
      }
    },
    storage
  )

  const completed = tasks.filter((task: Task) => !task.isChecked).length

  const [filter, setFilter] = useState(TASK_FILTER.ALL)

  const filteredTasks = () => {
    switch (filter) {
      case TASK_FILTER.ALL:
        return tasks
      case TASK_FILTER.COMPLETED:
        return tasks.filter((todo: Task) => todo.isChecked)
      case TASK_FILTER.ACTIVE:
        return tasks.filter((todo: Task) => !todo.isChecked)
    }
  }

  const createTask = (newTask: Partial<Task>) => {
    setTasks({
      type: TASK_ACTIONS.ADD_TASK,
      payload: {
        ...newTask,
        key: new Date().getTime(),
      },
    })
  }

  const updateTask = (taskDiff: Task) => {
    if (taskDiff) {
      setTasks({
        type: TASK_ACTIONS.UPDATE_TASK,
        payload: taskDiff,
      })
    }
  }

  const clearCompleted = () => {
    setTasks({
      type: TASK_ACTIONS.CLEAR_COMPLETED,
      payload: null,
    })
  }

  useEffect(() => {
    setStorage(tasks)
  }, [setStorage, tasks])

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
  )
}
