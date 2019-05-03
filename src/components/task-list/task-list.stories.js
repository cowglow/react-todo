import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import TaskList from "./task-list";

storiesOf('Components|TaskList', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return (<TaskList todos={['one', 'two', 'three']}/>)
    });