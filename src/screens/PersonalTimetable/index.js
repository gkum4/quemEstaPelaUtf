import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

import screenNames from '../../routes/screensNames';
import SubjectsOfTheDay from '../../Components/SubjectsOfTheDay';
import { Container } from './styles';
import { useEffect } from 'react';
import ShareTimetableButton from './ShareTimetableButton';

const daysData = {
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
};

const PersonalTimetable = () => {
  const navigation = useNavigation();

  const handleShareTimetable = useCallback(() => {
    // TODO: share timetable
  }, []);

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
      {daysNumbers.map(dayNumber => (
        <SubjectsOfTheDay
          key={dayNumber}
          dayData={daysData[dayNumber]}
          dayNumber={dayNumber}
          style={{ marginTop: 20 }}
          canEdit
          handleEdit={() => handleEdit(daysData[dayNumber], dayNumber)}
        />
      ))}
    </Container>
  );
};

export default PersonalTimetable;
