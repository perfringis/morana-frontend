import React from 'react';
import SearchHero from '../components/SearchHero';

export default {
    title: 'SearchHero',
    component: SearchHero,
};

const Template = args => < SearchHero {
    ...args
}
/>;

export const First = Template.bind({});

First.args = {};