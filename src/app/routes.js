import React from 'react';
import { Route } from 'react-router';
import HomeContainer from './modules/Home/containers/HomeContainer';

export default(
  <Route>
    <Route
      path="/"
      component={HomeContainer}
    />
  </Route>
);
