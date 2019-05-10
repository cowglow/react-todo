import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import TaskToggle from "./task-toggle";


storiesOf('Components|TaskToggle', module)
    .addParameters({
        options: {
            showPanel: true
        }
    })
    .add('default', () => {
        return (<TaskToggle options={'all|active|complete'} callback={action('Toggle', {})}/>)
    });