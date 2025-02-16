import { useAppHook } from "./app.hook.ts"
import { FooterWrapper, MainWrapper, RootWrapper } from "./app.styled.ts"
import Header from "../app-header/app-header"
import TaskCount from "../task-count/task-count.tsx"
import { Box, Button, Divider, Tab, Tabs } from "@mui/material"
import TaskList from "../task-list/task-list"
import TaskMaker from "../task-maker/task-maker"

/**
 * App (Presentation Component)
 * Should not hold state
 */
export default function App() {
  const {
    tasks,
    completed,
    createTask,
    clearCompleted,
    tabIndex,
    setTabIndex,
  } = useAppHook()

  const tabs = {
    0: <TaskList todos={tasks} />,
    1: <TaskList todos={tasks.filter((task) => task.isChecked)} />,
  }
  return (
    <RootWrapper>
      {/* HEADER */}
      <Header>
        <TaskCount count={completed} />
      </Header>
      {/* MAIN */}
      {/*// @ts-ignore */}
      <MainWrapper component="main">
        <Tabs
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="to-do" />
          <Tab label="completed" />
        </Tabs>
        {Object.keys(tabs).map((key) => {
          return (
            <Box role="tabpanel" hidden={tabIndex !== Number(key)}>
              {/*// @ts-ignore */}
              {tabs[key]}
            </Box>
          )
        })}
      </MainWrapper>
      {/* Controls */}
      <FooterWrapper>
        <TaskMaker createTask={createTask} />
        <Divider />
        <Button
          variant="contained"
          color="primary"
          onClick={clearCompleted}
          fullWidth
        >
          Clear completed
        </Button>
      </FooterWrapper>
    </RootWrapper>
  )
}
