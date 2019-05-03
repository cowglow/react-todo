import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TaskToggle from "./task-toggle";

storiesOf('Components|TaskToggle', module)
    .add('default', () => {
        return (
            <div>
                <TaskToggle/>
                <button onClick={action('clicked')}>working on the story</button>
            </div>
        )
    });