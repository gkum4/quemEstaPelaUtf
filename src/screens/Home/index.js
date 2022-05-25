import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Clock from './Clock';
import {
  SafeAreaView,
  Container,
  ClockContainer,
  ContactsList,
} from './styles';
import ContactSubjects from './ContactSubjects';
import { View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  const contactsSubjectsData = [
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
    {
      username: 'varejas',
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
  ];

  return (
    <Container>
      <ContactsList
        ListHeaderComponent={() => (
          <>
            <View style={{ height: 20 }} />
            <ClockContainer>
              <Clock />
            </ClockContainer>
            <View style={{ height: 30 }} />
          </>
        )}
        data={contactsSubjectsData}
        renderItem={({ item }) => <ContactSubjects data={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(_, index) => index}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </Container>
  );
};

export default Home;
