import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import NavigationFooter from "../navigation-footer/navigation-footer"
import { useTasks } from "../../context/tasks-context"
import { Close as CloseIcon } from "@mui/icons-material"

interface AppNavigationProps {
  onClose: (drawerState: DrawerState) => (event: MouseEvent) => void
}

export default function AppNavigation({ onClose }: AppNavigationProps) {
  const { setFilter } = useTasks()
  return (
    <Box
      component="nav"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width={250}
      height="100%"
    >
      <Box textAlign="right">
        {/*//@ts-ignore */}
        <IconButton
          color="inherit"
          aria-label="Close Menu"
          onClick={onClose(false)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box mx={1} flex={1}>
        <Typography variant="h6">Filter</Typography>
        <Divider />
        <List>
          <ListItem component="button" onMouseDown={() => setFilter("all")}>
            {/*//@ts-ignore */}
            <ListItemText primary="All" onClick={onClose(false)} />
          </ListItem>
          <ListItem component="button" onMouseDown={() => setFilter("active")}>
            {/*//@ts-ignore */}
            <ListItemText primary="Active" onClick={onClose(false)} />
          </ListItem>
          <ListItem
            component="button"
            onMouseDown={() => setFilter("completed")}
          >
            {/*//@ts-ignore */}
            <ListItemText primary="Completed" onClick={onClose(false)} />
          </ListItem>
        </List>
      </Box>
      <NavigationFooter />
    </Box>
  )
}
