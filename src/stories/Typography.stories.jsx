import React from 'react';
import Typography from '../components/Typography';

import { Typeset } from '@storybook/addon-docs/blocks';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  ColorPalette,
  ColorItem
} from '@storybook/addon-docs';

export default {
  title: 'Typography/Default',
  component: Typography,

  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Typography</Title>
          <Subtitle>Typography</Subtitle>
          <Description>Typography</Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Title>Font family</Title>
          <Subtitle>Arial, Helvetica, sans-serif</Subtitle>
          <Title>Sizes</Title>
          <Typeset
            title='dsdas'
            fontFamily='Arial, Helvetica, sans-serif'
            fontSizes={[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, , 24, 26, 28, 30, 32, 34, 36]}
            sampleText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </>
      ),
    },
  },
};

const Template = args => < Typography {
  ...args
}
/>;

export const Default = Template.bind({});

Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  size: 16
};