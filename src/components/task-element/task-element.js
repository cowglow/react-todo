import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

class TaskElement extends React.Component {
    state = {
        checked: false
    };

    clickHandler = () => {
        this.state.checked = !this.state.checked;
    };

    render() {
        const {label, index} = this.props;
        return (
            <ListItem key={index} dense button onClick={this.clickHandler()}>
                <Checkbox checked={this.state.checked}/>
                <ListItemText primary={label}/>
            </ListItem>
        );
    }
}

export default TaskElement;