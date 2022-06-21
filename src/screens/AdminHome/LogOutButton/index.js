import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Styles/Colors';

import { Container } from './styles';

const LogOutButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon name="exit-outline" size={24} color={Colors.orange} />
    </Container>
  );
};

export default LogOutButton;
