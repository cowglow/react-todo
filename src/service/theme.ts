import { createTheme, ThemeOptions } from "@mui/material"
import { green, purple } from "@mui/material/colors"

const theme: ThemeOptions = {
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[500],
    },
  },
}

export default createTheme(theme)
