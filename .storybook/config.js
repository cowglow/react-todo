import {addDecorator, addParameters, configure} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";

import {muiTheme} from "storybook-addon-material-ui";

import theme from '../src/theme';

const req = require.context('../src/components', true, /\.stories\.js$/);

// Decorators
addDecorator(withKnobs);
addDecorator(muiTheme([theme]));

// Option defaults:
addParameters({
    options: {
        theme: undefined,
        showPanel: true
    },
});


configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
