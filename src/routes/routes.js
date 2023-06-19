import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';
import Home from '../Containers/Home/Home';
import PrivateRoute from './private-route';
import Products from '../Containers/Products/Products';

function Rotas() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} path="/login" />

          <Route component={Register} path="/cadastre-se" />

          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute component={Products} path="/produtos" />
        </Switch>
      </Router>
    </>
  );
}

export default Rotas;
