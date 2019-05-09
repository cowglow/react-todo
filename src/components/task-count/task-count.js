import React from 'react';
import {Badge} from "@material-ui/core";
import {Assignment} from '@material-ui/icons';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        border: 'thin solid red',
        backgroundColor: 'red'
    },
    badge: {
        border: 'thin solid red',
        margin: theme.spacing.unit
    },
    countLabel: {
        position: 'relative',
        fontFamily: theme.font.font,
        border: 'thin solid green',
        color: 'red'
    }
});

class TaskCount extends React.Component {

    render() {
        const {count, completedCount} = this.props;

        return (
            <div className={styles.root} aria-label="List count">
                {count > 0 ? (
                    <Badge badgeContent={count} color="primary" className={styles.badge}>
                        <Assignment/>
                        <span className={styles.countLabel}>things to do</span>
                    </Badge>
                ) : (
                    <span>Empty list.</span>
                )}

                {completedCount > 0 &&
                <span> | {completedCount} completed!</span>
                }
            </div>
        );
        // return (
        //     <Typography variant={"subtitle2"}>
        //         {count > 0 ? (<span>{count} things to do</span>) : (<span>Empty list.</span>)}
        //
        //
        //     </Typography>
        // );
    }
}

export default TaskCount;