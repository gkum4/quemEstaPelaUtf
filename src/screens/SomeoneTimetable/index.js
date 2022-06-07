import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import SubjectsOfTheDay from '../../Components/SubjectsOfTheDay';
import { Container, List } from './styles';

const SomeoneTimetable = () => {
  const navigation = useNavigation();
  const routeParams = useRoute().params;

  useEffect(() => {
    console.log(routeParams);
    navigation.setOptions({
      title: `Grade de ${routeParams.username}`,
    });
  }, [navigation, routeParams]);

  const daysNumbers = useMemo(() => [2, 3, 4, 5, 6, 7], []);

  return (
    <Container>
      {daysNumbers.map(dayNumber => (
        <SubjectsOfTheDay
          key={dayNumber}
          dayData={routeParams[dayNumber]}
          dayNumber={dayNumber}
          style={{ marginTop: 20 }}
        />
      ))}
    </Container>
  );
};

export default SomeoneTimetable;
