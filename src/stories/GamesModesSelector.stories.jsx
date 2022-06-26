import React from 'react';
import GamesModesSelector from '../components/GamesModesSelector';

export default {
  title: 'Component/GamesModesSelector',
  component: GamesModesSelector,
};

const Template = args => < GamesModesSelector {
  ...args
}
/>;

export const Default = Template.bind({});

Default.args = {};