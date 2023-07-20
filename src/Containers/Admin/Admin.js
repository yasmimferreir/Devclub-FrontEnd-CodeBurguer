import React from 'react';
import { Container, ContainerItems } from './styled';
//import Orders from './Orders/Orders';
import ListProducts from './ListProducts/ListProducts';
import { SideMenuAdmin } from '../../components/SideMenuAdmin/SideMenuAdmin';

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/*<Orders />*/}
        <ListProducts />
      </ContainerItems>
    </Container>
  );
}
