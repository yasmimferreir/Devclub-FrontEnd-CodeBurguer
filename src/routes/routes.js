import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Register, Home, Products, Cart } from '../Containers';

import PrivateRoute from './private-route';

function Rotas() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} path="/login" />

          <Route component={Register} path="/cadastre-se" />

          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute component={Products} path="/produtos" />
          <PrivateRoute component={Cart} path="/carrinho" />
        </Switch>
      </Router>
    </>
  );
}

export default Rotas;
