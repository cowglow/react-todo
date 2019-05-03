import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TaskElement from "./task-element";

storiesOf('Components|TaskElement', module)
    .add('default', () => {
        return (
            <div>
                <TaskElement/>
                <button onClick={action('clicked')}>working on the story</button>
            </div>
        )
    });