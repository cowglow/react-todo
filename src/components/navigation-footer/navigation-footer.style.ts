import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles((theme) => ({
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
