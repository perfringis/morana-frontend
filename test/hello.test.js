import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import React from 'react';
import App from '../src/components/App';

test('hello test', () => {
  const helloWorld = 'Hello World!';

  render(<App>{helloWorld}</App>);

  expect(screen.getByText(helloWorld)).not.toBeNull();
});
