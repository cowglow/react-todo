import React from 'react';
import {storiesOf} from '@storybook/react';
import {withState} from "@dump247/storybook-state";

import TaskList from "./task-list";

storiesOf('Components|TaskList', module)
    .addParameters({
        options: {
            showPanel: true
        }
    })
    .add('default', withState(
        {
            todos: [
                {key: 1, label: 'One', isChecked: false},
                {key: 2, label: 'Two', isChecked: true},
                {key: 3, label: 'Three', isChecked: false}
            ]
        }
    )(
        ({store}) => {
            let {todos} = store.state;

            const callbackHandler = (taskDiff) => {
                if (taskDiff) {
                    const {todos} = store.state;

                    todos.forEach((task, index, collection) => {
                        if (taskDiff.key === task.key) {
                            collection[index] = taskDiff;
                        }
                    });

                    store.set({
                        taskCollection: todos,
                        tasksCompleted: Math.max(0,todos.filter(task => task.isChecked === true).length)
                    });
                }
            };

            return (<TaskList todos={todos} callback={callbackHandler}/>)
        }));