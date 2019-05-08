import React from 'react';
import {storiesOf} from '@storybook/react';
import {number, withKnobs} from "@storybook/addon-knobs";
import TaskCount from "./task-count";

storiesOf('Components|TaskCount', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        /*
        const getRandomNumber = () => {
            return Math.floor(Math.random() * Math.floor(3))
        };

        const currentValueDefault = getRandomNumber();
        const completeCountDefault = getRandomNumber();
        */
        const currentValueDefault = 6;
        const completeCountDefault = 0;
        const options = {
            range: true,
            min: 0,
            max: 10,
            step: 1,
        };
        const groupId = 'GROUP-ID1';

        const currentValue = number('Number of Tasks', currentValueDefault, options, groupId);
        const completedCount = number('Completed Tasks', completeCountDefault, options, groupId);
        return (<TaskCount count={currentValue} completedCount={completedCount}/>)
    });
