import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import './style/index.scss';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store()}>
    <App />
  </Provider>
);
