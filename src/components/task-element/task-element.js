import React from 'react';
import {Checkbox, ListItem, ListItemText} from "@material-ui/core";

import styles from './task-element.module.css';

class TaskElement extends React.Component {
    state = {
        index: null,
        label: '',
        isChecked: false
    };

    constructor() {
        super();
        this.state = {
            isChecked: false
        }
    }

    componentWillMount() {
        const {isChecked} = this.props;
        this.setState({
            isChecked: isChecked
        });
    }

    render() {
        const {label, callback} = this.props;

        const clickHandler = () => {
            const checkedState = !this.state.isChecked;

            this.setState({
                isChecked: checkedState
            });

            callback({
                index: this.props.index,
                label: this.props.label,
                isChecked: checkedState
            });
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