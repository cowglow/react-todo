import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {withKnobs} from "@storybook/addon-knobs";

import TaskElement from "./task-element";

storiesOf('Components|TaskElement', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return (<TaskElement index={1} label="Task Element" checked={true} callback={action('clicked')}/>)
    });
