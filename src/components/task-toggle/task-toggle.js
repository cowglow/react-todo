import React from 'react';
import {RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import {Favorite, FavoriteBorderOutlined} from '@material-ui/icons';

import styles from './task-toggle.module.css';

class TaskToggle extends React.Component {

    state = {
        options: [],
        mode: 0
    };

    componentWillMount() {
        let {options} = this.props;
        if (typeof options !== "object") {
            options = options.split('|');
        }

        this.setState({
            options: options,
        });
    }

    clickHander = (event, optionIndex) => {
        const {callback} = this.props;

        this.setState({
            options: this.state.options,
            mode: optionIndex
        });

        callback(this.state.options[optionIndex]);
    };

    render() {
        const {options, mode} = this.state;

        return (
            <RadioGroup
                aria-label="position"
                name="position"
                value={this.state.value}
                onChange={this.handleChange}
                row
            >
                {options.map((option, index) => {
                    const label = option.toUpperCase();
                    return (
                        <FormControlLabel
                            value={label}
                            control={<Radio color="primary"/>}
                            label={label}
                            labelPlacement="bottom"
                        />)
                })}
            </RadioGroup>
        );
    }
}

// return (
//     <BottomNavigation value={mode} showLabels className={styles.toggleButton} onChange={this.clickHander}>
//         {options.map((option, index) => {
//             const label = option.toUpperCase();
//             // console.log(this.state.mode,this.state.options.indexOf(option));
//             if (this.state.mode === this.state.options.indexOf(option)) {
//                 return (<BottomNavigationAction label={label} icon={<Favorite/>}/>)
//             } else {
//                 return (<BottomNavigationAction label={label} icon={<FavoriteBorderOutlined/>}/>)
//             }
//         })}
//     </BottomNavigation>
// );

export default TaskToggle;