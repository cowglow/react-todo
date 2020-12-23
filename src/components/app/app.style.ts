import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles((theme) => ({
  root: {
    width: "100%",
  },
  main: {
    flex: "1 0 auto",
  },
  controls: {
    // border: 'thin solid green',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stickyFooter: {
    backgroundColor: "white",
    border: "thin solid " + theme.palette.primary.light,
    color: theme.palette.primary.main,
    position: "fixed",
    padding: "0.5em",
    margin: "1rem",
    top: "auto",
    left: "0",
    bottom: "0",
    right: "0",
  },
  btnClearCompleted: {
    // border: 'thin solid green',
  },
}));
