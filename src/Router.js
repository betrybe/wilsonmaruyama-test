import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/carteira">
        <Wallet />
      </Route>
    </Switch>
  );
}

export default Router;
