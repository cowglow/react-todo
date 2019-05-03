import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TaskMaker from "./task-maker";

storiesOf('Components|TaskMaker', module)
    .add('default', () => {
        return (<TaskMaker callback={action('changed', 'on')}/>)
    });