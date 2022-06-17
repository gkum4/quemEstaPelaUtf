import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import screensNames from '../../routes/screensNames';
import Clock from './Clock';
import ContactSubjects from './ContactSubjects';
import filterUsersSubjects from './filterUsersSubjects';
import orderUsers from './orderUsers';
import LogOutButton from './LogOutButton';
import { useAuth } from '../../hooks/auth';
import { Container, ClockContainer, ContactsList, EmptyListText } from './styles';
import api from '../../services/api';

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersData, setFilteredUsersData] = useState([]);

  const navigation = useNavigation();

  const { signOut } = useAuth();

  const handleLogOut = useCallback(async () => {
    await signOut();
  }, [signOut]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <LogOutButton onPress={handleLogOut} />,
    });

    navigation.addListener('beforeRemove', e => {
      e.preventDefault();

      Alert.alert('Sair', 'Tem certeza que deseja sair?', [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    });
  }, [handleLogOut, navigation]);

  useFocusEffect(
    useCallback(() => {
      const getData = async () => {
        let data;

        try {
          const response = await api.get('user/close-users');

          data = response.data.connections;
        } catch (error) {
          return;
        }

        setUsersData(data);

        const date = new Date();
        const orderedUsers = orderUsers(data, `${date.getDay() + 1}`);
        const filteredUsersSubjects = filterUsersSubjects(orderedUsers, `${date.getDay() + 1}`);
        setFilteredUsersData(filteredUsersSubjects);
      };

      getData();

      return;
    }, []),
  );

  const handleSeeUserTimetable = useCallback(
    _id => {
      navigation.navigate(screensNames.SomeoneTimetable, { _id });
    },
    [navigation],
  );

  return (
    <Container>
      <ContactsList
        ListHeaderComponent={() => (
          <ClockContainer style={{ marginTop: 20, marginBottom: 20 }}>
            <Clock />
          </ClockContainer>
        )}
        data={filteredUsersData}
        renderItem={({ item }) => (
          <ContactSubjects
            data={item}
            handleSeeUserTimetable={() => handleSeeUserTimetable(item._id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(_, index) => index}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
        ListEmptyComponent={() => <EmptyListText>Sem usuários cadastrados</EmptyListText>}
      />
    </Container>
  );
};

export default Home;
