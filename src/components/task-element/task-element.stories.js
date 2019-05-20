import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
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
                console.log('taskDiff', taskDiff);
                action('click')(taskDiff);


                store.set({
                    task: taskDiff
                });
            };

            return (<TaskElement key={1} index={task.key} label={task.label} isChecked={task.isChecked}
                                 callback={clickHandler}/>)
        }
    ));
