import React from 'react';
import {storiesOf} from '@storybook/react';
import TaskToggle from "./task-toggle";

storiesOf('Components|TaskToggle', module)
    .add('default', () => {
        return (<TaskToggle/>)
    });