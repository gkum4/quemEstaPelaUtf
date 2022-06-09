import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo } from 'react';

import screensNames from '../../routes/screensNames';
import SubjectsOfTheDay from '../../Components/SubjectsOfTheDay';
import DeleteUserButton from './DeleteUserButton';
import { Container } from './styles';
import { Alert } from 'react-native';

const SomeoneTimetable = () => {
  const navigation = useNavigation();
  const routeParams = useRoute().params;

  const handleDeleteUser = useCallback(() => {
    // TODO: API call to remove user reference
    navigation.navigate(screensNames.Home);
  }, [navigation]);

  const showDeleteAlert = useCallback(
    () =>
      Alert.alert(
        `Apagar grade de ${routeParams.username}`,
        `Tem certeza que deseja apagar a grade de ${routeParams.username}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Apagar',
            onPress: handleDeleteUser,
          },
        ],
      ),
    [routeParams.username, handleDeleteUser],
  );

  useEffect(() => {
    navigation.setOptions({
      title: `Grade de ${routeParams.username}`,
      headerRight: () => <DeleteUserButton onPress={showDeleteAlert} />,
    });
  }, [navigation, routeParams, showDeleteAlert]);

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
