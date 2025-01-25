export interface TasksContextProps {
  tasks: Task[]
  completed: number
}

export interface TasksContextApi extends TasksContextProps {
  createTask: (task: Partial<Task>) => void
  updateTask: (taskDiff: Task) => void
  setFilter: (filter: TaskFilter) => void
  clearCompleted: () => void
}
