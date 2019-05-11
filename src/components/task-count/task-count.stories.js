import React from 'react';
import {storiesOf} from '@storybook/react';
import {number, withKnobs} from "@storybook/addon-knobs";
import TaskCount from "./task-count";

storiesOf('Components|TaskCount', module)
    .addDecorator(withKnobs)
    .addParameters({
        options: {
            showPanel: true

        }
    })
    .add('default', () => {
        const currentValueDefault = 6;
        const options = {
            range: true,
            min: 0,
            max: 10,
            step: 1,
        };
        const groupId = 'GROUP-ID1';

        const currentValue = number('Number of Tasks', currentValueDefault, options, groupId);
        return (<TaskCount count={currentValue}/>)
    })
    .add('empty values', () => {
        return (<TaskCount/>)
    });
