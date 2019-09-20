import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure([
    require.context('../components', true, /\.stories\.js$/),
    require.context('../stories', true, /\.stories\.js$/)
], module)
