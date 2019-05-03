import React from 'react';
import {storiesOf} from '@storybook/react';
import TaskMaker from "./task-maker";

storiesOf('Components|TaskMaker', module)
    .add('default', () => {
        return (
            <div>
                <TaskMaker/>
            </div>
        )
    });