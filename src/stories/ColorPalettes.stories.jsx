import React from 'react';
import ColorPalettes from '../components/ColorPalettes';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
  ColorPalette,
  ColorItem
} from '@storybook/addon-docs';

export default {
  title: 'ColorPalettes/Default',
  component: ColorPalettes,

  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Colors</Title>
          <Subtitle>Colors</Subtitle>
          <Description>Colors</Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Title>Color palette</Title>
          <ColorPalette>
            <ColorItem
              title="Main background color"
              subtitle="From lighter to darker"
              colors={{ Jacarta: '#42405f', DarkGunmetal: '#1E1D2B', EerieBlack: '#181722' }}
            />
            <ColorItem
              title="Left side menu background color"
              subtitle="From lighter to darker"
              colors={{ Independence: '#474b68', CharlestonGreen: '#252736', DarkGunmetal: '#1E1D2B' }}
            />
            <ColorItem
              title="Background color of components like current rank, match component and others"
              subtitle="From lighter to darker"
              colors={{ Independence: '#474b68', Gunmetal: '#282A37', DarkGunmetal: '#1E1D2B' }}
            />
            <ColorItem
              title="Season rank component background"
              subtitle="From lighter to darker"
              colors={{ Independence: '#474b68', Gunmetal: '#2B2C3E', DarkGunmetal: '#1E1D2B' }}
            />
            <ColorItem
              title="Nested component background on side menu"
              subtitle="From lighter to darker"
              colors={{ BlackCoral: '#565774', Onyx: '#353648', Gunmetal: '#2A2B3A' }}
            />
            <ColorItem
              title="Nested on main stage"
              subtitle="From lighter to darker"
              colors={{ BlackCoral: '#565774', Arsenic: '#3B3C4E', Gunmetal: '#2A2B3A' }}
            />
            <ColorItem
              title="Font color"
              subtitle="From lighter to darker"
              colors={{ MetallicSilver: '#a4a4b0', RomanSilver: '#8D8D9C', SonicSilver: '#6e6e7f' }}
            />
            <ColorItem
              title="White"
              subtitle="From lighter to darker"
              colors={{ White: '#FEFEFE', ChineseSilver: '#cbcbcb' }}
            />
            <ColorItem
              title="Red"
              subtitle="From lighter to darker"
              colors={{ Tulip: '#ff828d', FieryRose: '#FF6370', RedSalsa: '#ff3547' }}
            />
            <ColorItem
              title="Green"
              subtitle="From lighter to darker"
              colors={{ Aquamarine: '#78f5cf', Turquoise: '#56F2C3', SpringGreen: '#19edad' }}
            />
            <ColorItem
              title="Blue"
              subtitle="From lighter to darker"
              colors={{ BrilliantAzure: '#3192fe', BrandeisBlue: '#0177FB', TrueBlue: '#015fc9' }}
            />
            <ColorItem
              title="Yellow"
              subtitle="From lighter to darker"
              colors={{ Blond: '#fef1c5', BananaMania: '#FEEEB7', NaplesYellow: '#fdda61' }}
            />
            <ColorItem
              title="Yellow(background)"
              subtitle="From lighter to darker"
              colors={{ GraniteGray: '#5f5a66', Onyx: '#38353C', CharlestonGreen: '#252736' }}
            />
            <ColorItem
              title="Purple"
              subtitle="From lighter to darker"
              colors={{ LavenderFloral: '#ba81d2', RichLavender: '#A961C7', Purpureus: '#8e3eaf' }}
            />
            <ColorItem
              title="Purple(background)"
              subtitle="From lighter to darker"
              colors={{ CyberGrape: '#53446f', DarkPurple: '#2D253C', DarkGunmetal: '#1E1D2B' }}
            />
          </ColorPalette>
        </>
      ),
    },
  },
};

const Template = args => < ColorPalettes {
  ...args
}
/>;

export const Default = Template.bind({});

Default.args = {};