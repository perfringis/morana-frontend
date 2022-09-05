import React from 'react';
import MiniMenu from '../components/MiniMenu';

export default {
    title: 'Component/MiniMenu',
    component: MiniMenu,
};

const Template = args => <MiniMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
};