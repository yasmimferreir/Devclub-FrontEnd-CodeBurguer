import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Register, Home, Products, Cart, Admin } from '../Containers';

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

          <PrivateRoute component={Admin} path="/painel" isAdmin={true} />
          <PrivateRoute component={Admin} path="/listar-produtos" isAdmin={true} />
        </Switch>
      </Router>
    </>
  );
}

export default Rotas;
