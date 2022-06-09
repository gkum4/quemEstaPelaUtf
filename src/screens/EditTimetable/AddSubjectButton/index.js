import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Styles/Colors';

import { Container } from './styles';

const AddSubjectButton = ({ onPress = () => {} }) => {
  return (
    <Container onPress={onPress}>
      <Icon name="add" color={Colors.orange} size={24} />
    </Container>
  );
};

export default AddSubjectButton;
