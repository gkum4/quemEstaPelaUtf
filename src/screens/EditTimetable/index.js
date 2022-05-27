import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { Container } from './styles';
import daysOfTheWeek from '../../Utils/daysOfTheWeek';

const EditTimetable = () => {
  const { dayNumber, subjects } = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: daysOfTheWeek[dayNumber] + ` [${dayNumber}]`,
    });
  }, [navigation, dayNumber]);

  return (
    <Container>
      <Text>EditTimetable</Text>
    </Container>
  );
};

export default EditTimetable;
