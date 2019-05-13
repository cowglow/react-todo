import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
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

            const callbackHandler = (newTodos) => {
                action('toggle');
                store.set({
                    todos: newTodos
                })
            };

            return (<TaskList todos={todos} callback={callbackHandler}/>)
        }));