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
  btnClearCompleted: {
    // border: 'thin solid green',
  },
}));
