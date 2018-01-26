import React from 'react';
import { Route } from 'react-router';
import HomeCointainer from './modules/Home/HomeContainer';

export default(
  <Route>
    <Route
      path="/"
      component={HomeCointainer}
    />
  </Route>
);
