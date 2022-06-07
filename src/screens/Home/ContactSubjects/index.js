import React from 'react';
import { FlatList, View } from 'react-native';
import Subject from '../../../Components/Subject';
import { Container, UsernameButton, UsernameText, EmptyText } from './styles';

/*
const contactSubjectsDataExample = {
  username: 'varejas',
  subjects: [
    {
      name: 'Cálculo 1',
      code: 'ELP21',
      class: 'S11'
      locationCode: 'CQ201',
      timeStartCode: 'T1',
      timeEndCode: 'T4',
    },
    {
      name: 'Cálculo 1',
      code: 'ELP21',
      class: 'S11'
      locationCode: 'CQ201',
      timeStartCode: 'T1',
      timeEndCode: 'T4',
    }
  ]
}
*/

const ContactSubjects = ({ data, handleSeeUserTimetable }) => {
  return (
    <Container>
      <UsernameButton onPress={handleSeeUserTimetable}>
        <UsernameText>{data.username}</UsernameText>
      </UsernameButton>

      <FlatList
        style={{ marginTop: 5 }}
        data={data.subjects}
        renderItem={({ item }) => <Subject data={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={(_, index) => index}
        ListEmptyComponent={() => <EmptyText>Sem aulas hoje</EmptyText>}
      />
    </Container>
  );
};

export default ContactSubjects;
