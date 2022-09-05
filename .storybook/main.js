const rules = require('../webpack.rules');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [{
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  framework: "@storybook/react",

  core: {
    builder: "webpack5"
  },

  webpackFinal: async (config, {
    configType
  }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: rules
      }
    };
  },
};