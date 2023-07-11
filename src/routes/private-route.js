import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../components/Header/Header';

function PrivateRoute({ component, isAdmin, ...res }) {
  const user = localStorage.getItem('codeburguer:userData');

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Route {...res} component={component} />;
    </>
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isAdmin: PropTypes.bool,
};
