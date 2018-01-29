import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import configureStore from './configureStore';
import history from './history';
import './index.scss';

const store = configureStore();

render(
  (
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
      />
    </Provider>
  ), document.getElementById('root'),
);
