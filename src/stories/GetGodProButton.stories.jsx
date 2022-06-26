import React from 'react';
import GetGodProButton from '../components/GetGodProButton';

export default {
  title: 'Component/GetGodProButton',
  component: GetGodProButton,
};

const Template = args => <GetGodProButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Get God pro'
};
