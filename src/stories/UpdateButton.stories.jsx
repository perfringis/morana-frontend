import React from 'react';
import UpdateButton from '../components/UpdateButton';

export default {
  title: 'Component/UpdateButton',
  component: UpdateButton,
};

const Template = args => <UpdateButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Update'
};
