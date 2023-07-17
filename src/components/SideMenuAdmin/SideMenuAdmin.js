import React from 'react';
import { Container, ItemContainer, ListItem } from './styled';
import ListLink from './menu-list';

export function SideMenuAdmin() {
  return (
    <Container>
      <hr></hr>
      {ListLink.map((item) => (
        <ItemContainer key={item.id}>
          <item.icon className="icon" />
          <ListItem to={item.link}>{item.label}</ListItem>
        </ItemContainer>
      ))}
      <hr></hr>
    </Container>
  );
}
