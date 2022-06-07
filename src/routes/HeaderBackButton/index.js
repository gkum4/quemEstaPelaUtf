import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from './styles';
import Colors from '../../Styles/Colors';

const HeaderBackButton = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" color={Colors.black} size={24} />
    </Container>
  );
};

export default HeaderBackButton;
