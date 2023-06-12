import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component, ...res }) {
  const user = localStorage.getItem('codeburguer:userData');

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...res} component={component} />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};
