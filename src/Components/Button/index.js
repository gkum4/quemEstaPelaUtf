import React from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../Styles/Colors';
import { Container, Title } from './styles';

const Button = ({
  title,
  onPress = () => {},
  isGreen = false,
  disabled = false,
  loading = false,
  ...rest
}) => {
  return (
    <Container
      onPress={onPress}
      color={isGreen ? Colors.green : Colors.orange}
      disabled={disabled}
      isDisabled={disabled}
      {...rest}>
      {loading ? <ActivityIndicator color={Colors.black} size={24} /> : <Title>{title}</Title>}
    </Container>
  );
};

export default Button;
