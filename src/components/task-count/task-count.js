import React from 'react';
import {Chip, Avatar} from "@material-ui/core";

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
                    <Chip avatar={<Avatar>{count}</Avatar>} label="things to do." className={styles.badge}/>
                ) : (
                    <span>Empty list.</span>
                )}

                {completedCount > 0 &&
                <Chip avatar={<Avatar>{completedCount}</Avatar>} label="completed" variant="outlined"/>
                }
            </div>
        )
    }
}

export default TaskCount;