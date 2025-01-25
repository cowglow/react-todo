import { TasksContextApi } from "./lib/types.ts"
import { createContext } from "react"

const defaultValues: TasksContextApi = {
  tasks: [],
  completed: 0,
  createTask: () => {
    throw Error("createTask: UninitializedErrorMessage")
  },
  updateTask: () => {
    throw Error("updateTask: UninitializedErrorMessage")
  },
  setFilter: () => {
    throw Error("updateTask: UninitializedErrorMessage")
  },
  clearCompleted: () => {
    throw Error("clearCompleted: UninitializedErrorMessage")
  },
}

export const TasksContext = createContext<TasksContextApi>(defaultValues)
