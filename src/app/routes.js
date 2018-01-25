import React from 'react';
import { Route } from 'react-router';
import Home from './modules/Home/HomeContainer';

export default(
  <Route>
    <Route
      path="/"
      component={Home}
    />
  </Route>
);
