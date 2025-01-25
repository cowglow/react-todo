import { Box, Divider, List } from "@mui/material"
import TaskElement from "../task-element/task-element"

interface TaskListProps {
  todos: Task[]
}

export default function TaskList({ todos }: TaskListProps) {
  if (!todos.length) return <Divider />
  return (
    <Box maxHeight="100%" overflow="hidden">
      <List disablePadding>
        {todos.map((task, index) => (
          <TaskElement
            key={task.key}
            index={index}
            taskKey={task.key}
            label={task.label}
            isChecked={task.isChecked}
          />
        ))}
      </List>
    </Box>
  )
}
