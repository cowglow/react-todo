import {configure} from "@storybook/react";

const req = require.context('../src/components', true, /\.stories\.js$/);

configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);
