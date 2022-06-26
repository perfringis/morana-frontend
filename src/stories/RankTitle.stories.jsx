import React from 'react';
import RankTitle from '../components/RankTitle';

export default {
  title: 'Component/RankTitle',
  component: RankTitle,
};

const Template = args => < RankTitle {
  ...args
}
/>;

export const First = Template.bind({});

First.args = {
  season: 'S2020',
  rank: 'Challenger'
};