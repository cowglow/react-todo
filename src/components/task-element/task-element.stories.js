import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";

import TaskElement from "./task-element";

storiesOf('Components|TaskElement', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        return (<TaskElement label="Task Element"/>)
    });
