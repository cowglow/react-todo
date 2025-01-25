import { useTasks } from "../../context/tasks-context"
import { useState } from "react"

export function useAppHook() {
  const { tasks, completed, createTask, clearCompleted } = useTasks()
  const [tabIndex, setTabIndex] = useState(0)
  return {
    tasks,
    completed,
    createTask,
    clearCompleted,
    tabIndex,
    setTabIndex,
  }
}
