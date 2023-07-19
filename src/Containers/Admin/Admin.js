import React from 'react';
import { Container } from './styled';
//import Orders from './Orders/Orders';
import ListProducts from './ListProducts/ListProducts';
import { SideMenuAdmin } from '../../components/SideMenuAdmin/SideMenuAdmin';

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      {/* <Orders />*/}
      <ListProducts />
    </Container>
  );
}
