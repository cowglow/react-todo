import {Theme, withStyles} from "@mui/material";

export default withStyles((theme: Theme) => ({
    root: {
        width: "100%",
    },
    main: {
        flex: "1 0 auto",
    },
    controls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btnClearCompleted: {
        border: theme.palette.success.main
    },
}));
