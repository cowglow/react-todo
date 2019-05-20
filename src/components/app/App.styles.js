const styles = theme => ({
    root: {
        width: '100%'
    },
    drawer: {
        width: 250,
        padding: '0.5em',
        height: '100%',
    },
    header: {
        textAlign: 'left',
        backgroundColor: theme.palette.primary.dark,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    main: {
        flex: '1 0 auto',
    },
    controls: {
        // border: 'thin solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stickyFooter: {
        backgroundColor: 'white',
        border: 'thin solid ' + theme.palette.primary.light,
        color: theme.palette.primary.main,
        position: 'fixed',
        padding: '0.5em',
        margin: '1rem',
        top: 'auto',
        left: '0',
        bottom: '0',
        right: '0',
    },
    icon: {
        width: '3em',
    },
    btnClearCompleted: {
        // border: 'thin solid green',
    }
});

export default styles;