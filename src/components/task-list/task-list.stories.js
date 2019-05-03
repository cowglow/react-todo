import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TaskList from "./task-list";

storiesOf('Components|TaskList', module)
    .add('default', () => {
        return (
            <div>
                <TaskList/>
                <button onClick={action('clicked')}>working on the story</button>
            </div>
        )
    });