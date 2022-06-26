import React from 'react';
import PlayerAvatar from '../components/PlayerAvatar';

export default {
    title: 'Component/PlayerAvatar',
    component: PlayerAvatar,
};

const Template = args => < PlayerAvatar {
    ...args
}
/>;

export const Default = Template.bind({});

Default.args = {};