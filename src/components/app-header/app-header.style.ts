import {Theme, withStyles} from "@mui/material";

export default withStyles((theme:Theme) => ({
  root: {
    textAlign: "left",
    backgroundColor: theme.palette.primary.dark,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: 250,
    padding: 8,
  },
  icon: {
    width: 48,
  },
}));
