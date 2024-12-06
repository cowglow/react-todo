import {Theme, withStyles} from "@mui/material";

export default withStyles((theme:Theme) => ({
  root: {
    backgroundColor: "white",
    border: "thin solid " + theme.palette.primary.light,
    position: "fixed",
    padding: "0.5em",
    margin: 16,
    top: "auto",
    left: "0",
    bottom: "0",
  },
}));
