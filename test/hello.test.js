import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

// TODO: move configuration to separate file
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

test('hello test', () => {
  const component = shallow(<App />);

  expect(component.text()).toEqual('Hello World!');
});
