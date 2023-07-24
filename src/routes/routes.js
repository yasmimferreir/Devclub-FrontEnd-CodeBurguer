import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Register, Home, Products, Cart, Admin } from '../Containers';

import PrivateRoute from './private-route';
import paths from '../constants/paths';

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

          <PrivateRoute component={Admin} path={paths.Order} isAdmin={true} />
          <PrivateRoute component={Admin} path={paths.Products} isAdmin={true} />
          <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin={true} />
        </Switch>
      </Router>
    </>
  );
}

export default Rotas;
