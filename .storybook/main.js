const rules = require('../webpack.rules');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs'],

  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: rules
      },
    };
  },
};