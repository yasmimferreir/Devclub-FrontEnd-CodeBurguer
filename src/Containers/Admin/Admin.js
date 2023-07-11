import React from 'react';
import { Container } from './styled';
import Orders from './Orders/Orders';

export function Admin() {
  return (
    <Container>
      <h1>Admin</h1>
      <Orders />
    </Container>
  );
}
