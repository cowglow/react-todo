import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {withKnobs} from "@storybook/addon-knobs";
import TaskList from "./task-list";

storiesOf('Components|TaskList', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return (<TaskList todos={[
            {label: 'One', completed: false},
            {label: 'Two', completed: true},
            {label: 'Three', completed: false}
        ]} callback={action('changed')}/>)
    });