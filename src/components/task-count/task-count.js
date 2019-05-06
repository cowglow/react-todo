import React from 'react';
import {Typography} from "@material-ui/core";

class TaskCount extends React.Component {
    render() {
        const {collection} = this.props;
        return (
            <Typography variant={"subtitle2"}>
                {collection.length} items
            </Typography>
        );
    }
}

export default TaskCount;