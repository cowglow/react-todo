import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {select, withKnobs} from "@storybook/addon-knobs";
import TaskList from "./task-list";

storiesOf('Components|TaskList', module)
    .addParameters({
        options: {
            showPanel: true
        }
    })
    .addDecorator(withKnobs)
    .add('default', () => {
        const label = 'Filter';
        const options = {
            All: 'all',
            Active: 'active',
            Completed: 'completed'
        };
        const defaultValue = 'all';
        const groupId = 'GROUP-ID1';

        const filter = select(label, options, defaultValue, groupId);

        return (<TaskList todos={[
            {label: 'One', isChecked: false},
            {label: 'Two', isChecked: true},
            {label: 'Three', isChecked: false}
        ]} callback={action('changed')} filter={filter}/>)
    });