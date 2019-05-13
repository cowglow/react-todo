import React from 'react';
import {storiesOf} from '@storybook/react';
import {withState} from "@dump247/storybook-state";

import TaskElement from "./task-element";

storiesOf('Components|TaskElement', module)
    .add('default', withState(
        {
            task: {key: 1, label: 'Task Element Component', isChecked: false}
        }
    )(
        ({store}) => {
            const {task} = store.state;

            const clickHandler = (taskDiff) => {
                store.set({
                    task: {
                        key: taskDiff.key,
                        label: 'Task Element Triggered Event',
                        isChecked: eval(taskDiff.isChecked)
                    }
                });
            };

            return (<TaskElement index={task.key} label={task.label} checked={task.isChecked} callback={clickHandler}/>)
        }
    ));
