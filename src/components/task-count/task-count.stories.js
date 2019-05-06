import React from 'react';
import {storiesOf} from '@storybook/react';
import {number, withKnobs} from "@storybook/addon-knobs";
import TaskCount from "./task-count";

storiesOf('Components|TaskCount', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        const defaultValue = 0;
        const options = {
            range: true,
            min: 0,
            max: 10,
            step: 1,
        };
        const groupId = 'GROUP-ID1';

        const currentValue = number('Number of Tasks', defaultValue, options, groupId);
        const completedCount = number('Completed Tasks', defaultValue, options, groupId);
        return (<TaskCount count={currentValue} completedCount={completedCount}/>)
    });
