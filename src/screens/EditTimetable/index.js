import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import daysOfTheWeek from '../../Utils/daysOfTheWeek';
import EditSubject from './EditSubject';
import AddSubjectButton from './AddSubjectButton';
import { List, LineSeparator, EmptyListContainer, EmptyListText } from './styles';

const EditTimetable = () => {
  const [subjects, setSubjects] = useState([]);

  const routeParams = useRoute().params;
  const navigation = useNavigation();

  const handleAddSubject = useCallback(() => {
    const newSubjects = [{}, ...subjects];
    setSubjects(newSubjects);
  }, [subjects]);

  const handleDeleteSubject = useCallback(
    subjectIndex => {
      const data = [...subjects];

      if (!data.at(subjectIndex)) {
        return;
      }

      data.splice(subjectIndex, 1);
      setSubjects(data);

      // TODO: API call to delete
    },
    [subjects],
  );

  useEffect(() => {
    navigation.setOptions({
      title: daysOfTheWeek[routeParams.dayNumber] + ` [${routeParams.dayNumber}]`,
      headerRight: () => <AddSubjectButton onPress={handleAddSubject} />,
    });
  }, [navigation, routeParams.dayNumber, handleAddSubject]);

  useEffect(() => {
    setSubjects(routeParams.subjects);
  }, [routeParams.subjects]);

  if (subjects.length === 0) {
    return (
      <EmptyListContainer>
        <EmptyListText>Sem disciplinas cadastradas para</EmptyListText>
        <EmptyListText style={{ fontWeight: 'bold' }}>
          {daysOfTheWeek[routeParams.dayNumber]} {`[${routeParams.dayNumber}]`}
        </EmptyListText>
      </EmptyListContainer>
    );
  }

  return (
    <List
      ListHeaderComponent={() => <View style={{ marginTop: 25 }} />}
      data={subjects}
      renderItem={({ item, index }) => (
        <EditSubject data={item} handleDelete={() => handleDeleteSubject(index)} />
      )}
      keyExtractor={(_, index) => index}
      ItemSeparatorComponent={() => (
        <View style={{ marginVertical: 15 }}>
          <LineSeparator />
        </View>
      )}
    />
  );
};

export default EditTimetable;
