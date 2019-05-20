import React from 'react';
import {Chip, Avatar} from "@material-ui/core";

import styles from './task-count.module.css';

const TaskCount = ({count}) => (
    <div className={styles.root} aria-label="List count">
        {count ? (
            <Chip avatar={<Avatar>{count}</Avatar>} color="primary" label="things to do."/>
        ) : (
            <Chip label={"Nothing to do"} color="primary" variant="outlined"/>
        )}
    </div>
);


export default TaskCount;