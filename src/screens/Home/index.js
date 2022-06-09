import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import screensNames from '../../routes/screensNames';
import Clock from './Clock';
import ContactSubjects from './ContactSubjects';
import filterUsersSubjects from './filterUsersSubjects';
import orderUsers from './orderUsers';
import { Container, ClockContainer, ContactsList } from './styles';

const contactsSubjectsDataExample = [
  {
    username: 'kuma',
    2: {
      subjects: [
        // {
        //   name: 'Cálculo 1',
        //   code: 'ELP21',
        //   class: 'S11',
        //   locationCode: 'CQ201',
        //   timeStartCode: 'T1',
        //   timeEndCode: 'T4',
        // },
        // {
        //   name: 'Cálculo 1',
        //   code: 'ELP21',
        //   class: 'S11',
        //   locationCode: 'CQ201',
        //   timeStartCode: 'T1',
        //   timeEndCode: 'T4',
        // },
      ],
    },
    3: {
      subjects: [
        // {
        //   name: 'Cálculo 1',
        //   code: 'ELP21',
        //   class: 'S11',
        //   locationCode: 'CQ201',
        //   timeStartCode: 'T1',
        //   timeEndCode: 'T4',
        // },
        // {
        //   name: 'Cálculo 1',
        //   code: 'ELP21',
        //   class: 'S11',
        //   locationCode: 'CQ201',
        //   timeStartCode: 'T1',
        //   timeEndCode: 'T4',
        // },
      ],
    },
    4: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    5: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    6: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    7: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
  },
  {
    username: 'varejas',
    2: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    3: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    4: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    5: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    6: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
    7: {
      subjects: [
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
        {
          name: 'Cálculo 1',
          code: 'ELP21',
          class: 'S11',
          locationCode: 'CQ201',
          timeStartCode: 'T1',
          timeEndCode: 'T4',
        },
      ],
    },
  },
];

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsersData, setFilteredUsersData] = useState([]);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const data = contactsSubjectsDataExample; // TODO: API GET users data
      setUsersData(data);

      const date = new Date();
      const orderedUsers = orderUsers(data, `${date.getDay() + 1}`);
      const filteredUsersSubjects = filterUsersSubjects(orderedUsers, `${date.getDay() + 1}`);

      setFilteredUsersData(filteredUsersSubjects);

      return;
    }, []),
  );

  const handleSeeUserTimetable = useCallback(
    username => {
      const userData = usersData.find(item => item.username === username);

      navigation.navigate(screensNames.SomeoneTimetable, userData);
    },
    [navigation, usersData],
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
            handleSeeUserTimetable={() => handleSeeUserTimetable(item.username)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(_, index) => index}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </Container>
  );
};

export default Home;
