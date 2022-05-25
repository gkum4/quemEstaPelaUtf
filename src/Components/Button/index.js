import React from 'react';
import Colors from '../../Styles/Colors';
import { Container, Title } from './styles';

const Button = ({
  title,
  onPress = () => {},
  isGreen = false,
  disabled = false,
  ...rest
}) => {
  return (
    <Container
      onPress={onPress}
      color={isGreen ? Colors.green : Colors.orange}
      disabled={disabled}
      isDisabled={disabled}
      {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
