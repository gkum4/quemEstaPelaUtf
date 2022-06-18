import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import screensNames from '../../routes/screensNames';
import SubjectsOfTheDay from '../../Components/SubjectsOfTheDay';
import DeleteUserButton from './DeleteUserButton';
import { Container } from './styles';

const SomeoneTimetable = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { _id } = useRoute().params;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('user/connection/' + _id);
        setData(response.data);
      } catch (_) {
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [_id]);

  const handleDeleteUser = useCallback(async () => {
    try {
      await api.delete('user/connection/' + data._id);
    } catch (_) {
      Alert.alert(
        'Erro.',
        'Ocorreu um erro ao tentar deletar usuário da lista de conexões, tente novamente',
      );
      return;
    }

    navigation.navigate(screensNames.Home);
  }, [navigation, data._id]);

  const showDeleteAlert = useCallback(
    () =>
      Alert.alert(
        `Apagar grade de ${data.username}`,
        `Tem certeza que deseja apagar a grade de ${data.username}?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Apagar',
            style: 'destructive',
            onPress: handleDeleteUser,
          },
        ],
      ),
    [handleDeleteUser, data.username],
  );

  useEffect(() => {
    navigation.setOptions({
      title: `Grade de ${data.username}`,
      headerRight: () => <DeleteUserButton onPress={showDeleteAlert} />,
    });
  }, [navigation, data.username, showDeleteAlert]);

  const daysNumbers = useMemo(() => [2, 3, 4, 5, 6, 7], []);

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {daysNumbers.map(dayNumber => (
            <SubjectsOfTheDay
              key={dayNumber}
              dayData={data[dayNumber]}
              dayNumber={dayNumber}
              style={{ marginTop: 20 }}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default SomeoneTimetable;
