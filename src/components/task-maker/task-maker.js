import React from 'react';
import PropTypes from "prop-types";
import {Input, withStyles} from "@material-ui/core";

import styles from './task-maker.module.css';

class TaskMaker extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <Input
                    defaultValue=""
                    placeholder="Blank Todo"
                    inputProps={
                        {
                            'arial-label': 'Blank To Do Input'
                        }
                    }
                />
            </div>
        );
    }
}

TaskMaker.propTypes = {
    label: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskMaker);