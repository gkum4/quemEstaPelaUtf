import React, { useCallback, useState } from 'react';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import {
  AddedTimetableText,
  AddOtherTimetableButton,
  AddOtherTimetableText,
  Container,
} from './styles';

const AddTimetable = () => {
  const [userCode, setUserCode] = useState('');
  const [addedTimetable, setAddedTimetable] = useState(false);
  const [timetableUsername, setTimetableUsername] = useState('varejas');

  const handleAddTimetable = useCallback(() => {
    console.log(userCode);
    setAddedTimetable(true);
  }, [userCode]);

  const handleAddOtherTimetable = useCallback(() => {
    setAddedTimetable(false);
    setUserCode('');
  }, []);

  return (
    <Container>
      <TextField
        placeholder="Código do usuário"
        value={userCode}
        onValueChange={setUserCode}
      />

      <Button
        title={addedTimetable ? 'Grade Adicionada' : 'Adicionar Grade'}
        onPress={handleAddTimetable}
        style={{ marginTop: 30 }}
        disabled={addedTimetable}
      />

      {addedTimetable && (
        <>
          <AddedTimetableText>
            Grade de {timetableUsername} foi adicionada com sucesso
          </AddedTimetableText>
          <AddOtherTimetableButton
            onPress={handleAddOtherTimetable}
            style={{ marginTop: 20 }}>
            <AddOtherTimetableText>Adicionar outra</AddOtherTimetableText>
          </AddOtherTimetableButton>
        </>
      )}
    </Container>
  );
};

export default AddTimetable;
