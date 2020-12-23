import React from 'react';
import {storiesOf} from "@storybook/react";
import App from './app';

storiesOf('WebApp|ReactTodo', module)
    .addParameters({
        options: {
            showPanel: false

        }
    })
    .add('default', () => {
        return (<App/>)
    });
