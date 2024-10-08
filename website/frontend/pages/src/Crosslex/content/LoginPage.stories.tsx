import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LoginPage } from './LoginPage';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  argTypes: {
    onSubmit: { action: 'login submitted' },
    onSignUp: { action: 'sign up submitted' },
    onForgotPassword: { action: 'forgot password submitted' },
  },
} as Meta;

const Template: StoryFn<typeof LoginPage> = args => <LoginPage {...args} />;

export const Primary: StoryObj<typeof LoginPage> = Template.bind({});
Primary.args = {
  onSubmit: (username, password) =>
    console.log('Login submitted', { username, password }),
  onSignUp: (username, password) =>
    console.log('Sign up submitted', { username, password }),
  onForgotPassword: email =>
    console.log('Forgot password submitted', { email }),
};
