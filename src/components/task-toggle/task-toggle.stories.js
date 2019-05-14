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
        return (<TaskToggle options={['all', 'active', 'completed']} callback={action('Toggle',)}/>)
    })
    .add('with initial value', () => {
        return (<TaskToggle options={['all', 'active', 'completed']} initVal={'active'} callback={action('Toggle',)}/>)
    })
    .add('binary filter', () => {
        return (<TaskToggle options={['on','off']} callback={action('Toggle')} />)
    });