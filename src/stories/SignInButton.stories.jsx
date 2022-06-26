import React from 'react';
import SignInButton from '../components/SignInButton';

export default {
  title: 'Component/SignInButton',
  component: SignInButton,
};

const Template = args => <SignInButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Sign In'
};
