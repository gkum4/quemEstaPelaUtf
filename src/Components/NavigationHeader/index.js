import React from 'react';
import { Container, Title } from './styles';

const NavigationHeader = ({ name = '' }) => {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
};

export default NavigationHeader;
