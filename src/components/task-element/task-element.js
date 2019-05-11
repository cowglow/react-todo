import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

import styles from './task-element.module.css';

class TaskElement extends React.Component {
    state = {
        label: '',
        isChecked: false
    };

    componentWillMount() {
        const {isChecked} = this.props;
        this.setState({
            isChecked: isChecked
        });
    }

    render() {
        const {index, label, callback} = this.props;

        const clickHandler = () => {
            const checkedState = !this.state.isChecked;

            this.setState({
                isChecked: checkedState
            });

            callback({
                label: this.props.label,
                isChecked: checkedState
            }, index);
        };

        return (
            <ListItem dense button onClick={clickHandler}>
                <Checkbox checked={this.state.isChecked} inputProps={{'arial-label': label}}/>
                <ListItemText primary={label}
                              className={(this.state.isChecked ? styles.completedTask : styles.uncompletedTask)}/>
            </ListItem>
        );
    }
}

export default TaskElement;