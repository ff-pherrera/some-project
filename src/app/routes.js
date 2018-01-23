import React from 'react';
import { Route } from 'react-router';
import HomeComponent from './modules/Home/Home';

export default(
  <Route>
    <Route
      path="/"
      component={HomeComponent}
    />
  </Route>
);
