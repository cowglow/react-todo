import React from 'react';
import {storiesOf} from "@storybook/react";
import App from './App';

storiesOf('WebApp|ReactTodo', module)
    .add('default', () => {
        return (<App/>)
    });