import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TaskCount from "./task-count";

storiesOf('Components|TaskCount', module)
    .add('default', () => {
        return (
            <div>
                <TaskCount/>
                <button onClick={action('clicked')}>working on the story</button>
            </div>
        )
    });