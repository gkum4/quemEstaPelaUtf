import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../../Styles/Colors';
import subjectTimeCodes from '../../../Utils/subjectTimeCodes';
import checkIfTimeCodeIsValid from './checkIfTimeCodeIsValid';
import {
  Container,
  TopContainer,
  SubjectNameText,
  SubjectNameTextInput,
  DeleteButton,
  Row,
  Text,
  TextInput,
} from './styles';

const EditSubject = ({ data, index, handleDelete = () => {}, handleEdit = () => {} }) => {
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    setSubjectData(data);
  }, [data]);

  const handleTextChange = useCallback(
    (newText, type) => {
      const newData = {};
      Object.assign(newData, subjectData);
      newData[type] = newText;

      setSubjectData(newData);

      handleEdit(newData, index);
    },
    [subjectData, handleEdit, index],
  );

  const handleTimeTextChange = useCallback(
    (newText, type) => {
      if (newText.length === 0) {
        return handleTextChange(text, type);
      }

      const text = newText.toUpperCase();

      if (text.length > 2) {
        return;
      }

      if (text.length === 1) {
        const firstChar = text.charAt(0);
        if (firstChar !== 'M' && firstChar !== 'T' && firstChar !== 'N') {
          return;
        }

        return handleTextChange(text, type);
      }

      if (!checkIfTimeCodeIsValid(text)) {
        return;
      }

      return handleTextChange(text, type);
    },
    [handleTextChange],
  );

  const timeStart = useMemo(() => {
    if (subjectTimeCodes[subjectData.timeStartCode]) {
      return subjectTimeCodes[subjectData.timeStartCode].start;
    }

    return '00:00';
  }, [subjectData]);

  const timeEnd = useMemo(() => {
    if (subjectTimeCodes[subjectData.timeEndCode]) {
      return subjectTimeCodes[subjectData.timeEndCode].end;
    }

    return '00:00';
  }, [subjectData]);

  return (
    <Container>
      <TopContainer>
        <Row>
          <SubjectNameTextInput
            placeholder="Disciplina"
            value={subjectData.name ? subjectData.name : ''}
            onChangeText={text => handleTextChange(text, 'name')}
          />

          <SubjectNameText> (</SubjectNameText>

          <SubjectNameTextInput
            placeholder="Código"
            value={subjectData.code ? subjectData.code : ''}
            onChangeText={text => handleTextChange(text.toUpperCase(), 'code')}
          />

          <SubjectNameText> - </SubjectNameText>

          <SubjectNameTextInput
            placeholder="Turma"
            value={subjectData.class ? subjectData.class : ''}
            onChangeText={text => handleTextChange(text.toUpperCase(), 'class')}
          />

          <SubjectNameText>)</SubjectNameText>
        </Row>

        <DeleteButton onPress={handleDelete}>
          <Icon name="trash-outline" color={Colors.red} size={18} />
        </DeleteButton>
      </TopContainer>

      <Row style={{ marginTop: 15 }}>
        <Text>Sala:{'  '}</Text>

        <TextInput
          placeholder="Sala"
          value={subjectData.locationCode ? subjectData.locationCode : ''}
          onChangeText={text => handleTextChange(text.toUpperCase(), 'locationCode')}
        />
      </Row>

      <Row style={{ marginTop: 15 }}>
        <Text>Horário:{'  '}</Text>

        <TextInput
          placeholder="Inicío"
          value={subjectData.timeStartCode ? subjectData.timeStartCode : ''}
          onChangeText={text => handleTimeTextChange(text, 'timeStartCode')}
        />

        <Text>
          {' '}
          ({timeStart}){'  '}até{'  '}
        </Text>

        <TextInput
          placeholder="Fim"
          value={subjectData.timeEndCode ? subjectData.timeEndCode : ''}
          onChangeText={text => handleTimeTextChange(text, 'timeEndCode')}
        />
        <Text> ({timeEnd})</Text>
      </Row>
    </Container>
  );
};

export default EditSubject;
