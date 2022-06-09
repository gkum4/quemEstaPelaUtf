import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../../Styles/Colors';
import { Container } from './styles';

const DeleteUserButton = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon name="trash-outline" color={Colors.red} size={24} />
    </Container>
  );
};

export default DeleteUserButton;
