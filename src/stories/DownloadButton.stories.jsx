import React from 'react';
import DownloadButton from '../components/DownloadButton';

export default {
  title: 'Component/DownloadButton',
  component: DownloadButton,
};

const Template = args => < DownloadButton {
  ...args
}
/>;

export const Default = Template.bind({});

Default.args = {
  title: 'Download'
};