import React from 'react';
import {Typography} from "@material-ui/core";

class TaskCount extends React.Component {
    render() {
        const {currentValue} = this.props;
        return (
            <Typography variant={"subtitle2"}>
                {currentValue} items
            </Typography>
        );
    }
}

export default TaskCount;