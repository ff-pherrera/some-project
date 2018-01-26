import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginContainer from './modules/Login/LoginContainer';
import HomeCointainer from './modules/Home/HomeContainer';

export default(
  <Route>
    <Route path="/">
      <IndexRoute component={LoginContainer} />
      <Route
        path="login"
        component={LoginContainer}
      />
      <Route
        path="home"
        component={HomeCointainer}
      />
    </Route>
  </Route>
);
