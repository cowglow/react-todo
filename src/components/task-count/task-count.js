import React from 'react';
import {Chip, Avatar} from "@material-ui/core";

import styles from './task-count.module.css';

class TaskCount extends React.Component {

    render() {
        const {count} = this.props;

        return (
            <div className={styles.root} aria-label="List count">
                {count ? (
                    <Chip avatar={<Avatar>{count}</Avatar>} color="primary" label="things to do." className={styles.badge}/>
                ) : (
                    <Chip label={"Nothing to do"} color="primary" variant="outlined" className={styles.badge}/>
                )}
            </div>
        )
    }
}

export default TaskCount;