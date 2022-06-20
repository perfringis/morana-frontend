import React from 'react';
import DownloadButton from '../components/DownloadButton';

export default {
  title: 'DownloadButton',
  component: DownloadButton,
};

const Template = args => < DownloadButton {
  ...args
}
/>;

export const Download = Template.bind({});

Download.args = {
  title: 'Download'
};