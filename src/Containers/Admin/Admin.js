import React from 'react';
import { Container } from './styled';
import Orders from './Orders/Orders';
import { SideMenuAdmin } from '../../components/SideMenuAdmin/SideMenuAdmin';

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <Orders />
    </Container>
  );
}
