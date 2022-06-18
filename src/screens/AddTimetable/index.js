import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import api from '../../services/api';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import {
  AddedTimetableText,
  AddOtherTimetableButton,
  AddOtherTimetableText,
  Container,
} from './styles';
import DismissKeyboardContainer from '../../Components/DismissKeyboardContainer';

const AddTimetable = () => {
  const [userCode, setUserCode] = useState('');
  const [addedTimetable, setAddedTimetable] = useState(false);
  const [timetableUsername, setTimetableUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTimetable = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.post('user/connection', { id: userCode });
      setTimetableUsername(response.data.username);
      setAddedTimetable(true);
    } catch (_) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar adicionar conexão, tente novamente');
    } finally {
      setIsLoading(false);
    }
  }, [userCode]);

  const handleAddOtherTimetable = useCallback(() => {
    setTimetableUsername('');
    setAddedTimetable(false);
    setUserCode('');
  }, []);

  return (
    <DismissKeyboardContainer>
      <Container>
        <TextField placeholder="Código do usuário" value={userCode} onValueChange={setUserCode} />

        <Button
          title={addedTimetable ? 'Grade Adicionada' : 'Adicionar Grade'}
          onPress={handleAddTimetable}
          style={{ marginTop: 30 }}
          disabled={addedTimetable}
          loading={isLoading}
        />

        {addedTimetable && (
          <>
            <AddedTimetableText>
              Grade de {timetableUsername} foi adicionada com sucesso
            </AddedTimetableText>
            <AddOtherTimetableButton onPress={handleAddOtherTimetable} style={{ marginTop: 20 }}>
              <AddOtherTimetableText>Adicionar outra</AddOtherTimetableText>
            </AddOtherTimetableButton>
          </>
        )}
      </Container>
    </DismissKeyboardContainer>
  );
};

export default AddTimetable;
