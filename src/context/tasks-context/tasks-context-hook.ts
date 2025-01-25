import { useContext } from "react"
import { TasksContext } from "./tasks-context.tsx"

/** Hook **/
export function useTasks() {
  return useContext(TasksContext)
}
