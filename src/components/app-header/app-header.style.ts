import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles((theme) => ({
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
