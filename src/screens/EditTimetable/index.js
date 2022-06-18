import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../../services/api';
import daysOfTheWeek from '../../Utils/daysOfTheWeek';
import EditSubject from './EditSubject';
import AddSubjectButton from './AddSubjectButton';
import Colors from '../../Styles/Colors';
import arrayIsEqual from '../../Utils/arrayIsEqual';
import {
  Container,
  List,
  LineSeparator,
  EmptyListContainer,
  EmptyListText,
  ButtonsContainer,
  UndoButton,
  SaveButton,
} from './styles';
import checkIfSubjectsDataIsCorrect from './checkIfSubjectsDataIsCorrect';
import filterSubjects from './filterSubjects';

const EditTimetable = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const routeParams = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    setSubjects(routeParams.subjects);
  }, [routeParams.subjects]);

  const handleAddSubject = useCallback(() => {
    const newSubjects = [{ isNew: true }, ...subjects];
    setSubjects(newSubjects);
  }, [subjects]);

  const handleDeleteSubject = useCallback(
    async subjectIndex => {
      Alert.alert('Excluir disciplina', 'Tem certeza que deseja excluir a discplina?', [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            const data = [...subjects];

            const subject = data[subjectIndex];

            if (!subject) {
              return;
            }

            data.splice(subjectIndex, 1);
            setSubjects(data);

            if (subject.isNew) {
              return;
            }

            await saveData(data);
          },
        },
      ]);
    },
    [subjects, saveData],
  );

  const handleSave = useCallback(async () => {
    await saveData(subjects);
  }, [subjects, saveData]);

  const saveData = useCallback(
    async data => {
      const filteredData = filterSubjects(data);

      if (!checkIfSubjectsDataIsCorrect(filteredData)) {
        Alert.alert('Dados inválidos.');
        return;
      }

      setIsLoading(true);

      try {
        await api.put('user/timetable/' + routeParams.dayNumber, { subjects: filteredData });
        Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      } catch (_) {
        Alert.alert('Erro', 'Ocorreu um erro ao tentar salvar os dados, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    },
    [routeParams.dayNumber],
  );

  // const handleUndo = useCallback(() => {
  //   setSubjects(routeParams.subjects);
  // }, [routeParams.subjects]);

  const handleEditSubject = useCallback(
    (subjectData, index) => {
      const newData = [...subjects];
      newData[index] = subjectData;

      setSubjects(newData);
    },
    [subjects],
  );

  useEffect(() => {
    navigation.setOptions({
      title: daysOfTheWeek[routeParams.dayNumber] + ` [${routeParams.dayNumber}]`,
      headerRight: () => <AddSubjectButton onPress={handleAddSubject} />,
    });
  }, [navigation, routeParams.dayNumber, handleAddSubject]);

  const canUndo = useMemo(() => {
    if (routeParams.subjects.length !== subjects.length) {
      return true;
    }

    return !arrayIsEqual(routeParams.subjects, subjects);
  }, [routeParams.subjects, subjects]);

  return (
    <Container>
      {subjects.length === 0 ? (
        <EmptyListContainer>
          <EmptyListText>Sem disciplinas cadastradas para</EmptyListText>
          <EmptyListText style={{ fontWeight: 'bold' }}>
            {daysOfTheWeek[routeParams.dayNumber]} {`[${routeParams.dayNumber}]`}
          </EmptyListText>
        </EmptyListContainer>
      ) : (
        <List
          ListHeaderComponent={() => <View style={{ marginTop: 25 }} />}
          data={subjects}
          renderItem={({ item, index }) => (
            <EditSubject
              data={item}
              index={index}
              handleDelete={() => handleDeleteSubject(index)}
              handleEdit={handleEditSubject}
            />
          )}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: 15 }}>
              <LineSeparator />
            </View>
          )}
        />
      )}
      <ButtonsContainer>
        {/* <UndoButton onPress={handleUndo} disabled={!canUndo}>
          <Icon name="arrow-undo" size={24} color={canUndo ? Colors.black : Colors.gray} />
        </UndoButton> */}

        <SaveButton onPress={handleSave} disabled={isLoading}>
          {isLoading ? <ActivityIndicator /> : <Icon name="save" size={24} color={Colors.black} />}
        </SaveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default EditTimetable;
