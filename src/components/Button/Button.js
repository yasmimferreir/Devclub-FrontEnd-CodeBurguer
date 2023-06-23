import React from 'react';
import { ContainerButton } from './styles';
import PropTypes from 'prop-types';

export function Button({ children, ...res }) {
  return (
    <>
      <ContainerButton {...res}>{children}</ContainerButton>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};
