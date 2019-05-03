import {addParameters, configure} from "@storybook/react";

const req = require.context('../src/components', true, /\.stories\.js$/);

// Option defaults:
addParameters({
    options: {
        theme: undefined,
    },
});

configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
