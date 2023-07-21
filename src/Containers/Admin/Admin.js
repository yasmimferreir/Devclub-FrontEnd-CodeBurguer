import React from 'react';
import { Container, ContainerItems } from './styled';
import Orders from './Orders/Orders';
import ListProducts from './ListProducts/ListProducts';
import { SideMenuAdmin } from '../../components/SideMenuAdmin/SideMenuAdmin';
import { PropTypes } from 'prop-types';
import paths from '../../constants/paths';

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Order && <ListProducts />}
        <ListProducts />
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};
