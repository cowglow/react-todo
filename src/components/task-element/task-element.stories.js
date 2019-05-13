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
                if (taskDiff) {
                    // TODO: Figure out why the Checkbox isn't changing
                    // console.log('store:', store.state.task.isChecked);
                    // console.log('diff:', taskDiff.isChecked);
                    store.set({
                        task: {
                            key: taskDiff.key,
                            label: 'Task Element Triggered Event',
                            isChecked: taskDiff.isChecked
                        }
                    });

                }
            };

            return (<TaskElement key={1} index={task.key} label={task.label} checked={task.isChecked}
                                 callback={clickHandler}/>)
        }
    ));
