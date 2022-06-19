import React from 'react';
import GamesModesSelector from '../components/GamesModesSelector';

export default {
  title: 'GamesModesSelector',
  component: GamesModesSelector,
};

const Template = args => < GamesModesSelector {
  ...args
}
/>;

export const First = Template.bind({});

First.args = {};