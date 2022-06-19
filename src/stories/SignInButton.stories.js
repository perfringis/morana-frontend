import React from 'react';
import SignInButton from '../components/SignInButton';

export default {
  title: 'SignInButton',
  component: SignInButton,
};

const Template = args => <SignInButton {...args} />;

export const SignIn = Template.bind({});

SignIn.args = {
  title: 'Sign In'
};
