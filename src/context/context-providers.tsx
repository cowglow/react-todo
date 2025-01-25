import { PropsWithChildren } from "react"
import { TasksContextProvider } from "./tasks-context"

export function ContextProviders({ children }: PropsWithChildren) {
  return (
    <TasksContextProvider>
      <>{children}</>
    </TasksContextProvider>
  )
}
