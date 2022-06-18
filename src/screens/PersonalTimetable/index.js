import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import screenNames from '../../routes/screensNames';
import SubjectsOfTheDay from '../../Components/SubjectsOfTheDay';
import ShareTimetableButton from './ShareTimetableButton';
import { Container } from './styles';
import { ActivityIndicator, Share } from 'react-native';

const PersonalTimetable = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const getData = async () => {
        try {
          const response = await api.get('user/timetable');
          setData(response.data);
        } catch (_) {
        } finally {
          setIsLoading(false);
        }
      };

      getData();

      return;
    }, []),
  );

  const handleShareTimetable = useCallback(() => {
    Share.share({
      message: 'Este é o meu código do QuemEstaPelaUtf: ' + data._id,
    });
  }, [data._id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareTimetableButton onPress={handleShareTimetable} />,
    });
  }, [navigation, handleShareTimetable]);

  const handleEdit = useCallback(
    (dayData, dayNumber) => {
      navigation.navigate(screenNames.EditTimetable, {
        subjects: dayData.subjects,
        dayNumber: dayNumber,
      });
    },
    [navigation],
  );

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
              canEdit
              handleEdit={() => handleEdit(data[dayNumber], dayNumber)}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default PersonalTimetable;
