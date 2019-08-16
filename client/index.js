import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './configure-store';
import './styles/styles.scss';

const store = configureStore();

// keep track of store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
