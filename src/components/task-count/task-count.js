import React from 'react';
import {Typography} from "@material-ui/core";

class TaskCount extends React.Component {

    render() {
        const {count, completedCount} = this.props;

        return (
            <Typography variant={"subtitle2"}>
                {count > 0 ? (<span>{count} things to do</span>) : (<span>Empty list.</span>)}


                {completedCount > 0 &&
                <span> | {completedCount} completed!</span>
                }
            </Typography>
        );
    }
}

export default TaskCount;