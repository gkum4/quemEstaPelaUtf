import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import daysOfTheWeek from '../../../Utils/daysOfTheWeek';
import screenNames from '../../../routes/screensNames';
import Subject from '../../../Components/Subject';
import { Container, TopView, DayOfTheWeekText, EditButton } from './styles';
import Colors from '../../../Styles/Colors';

// const dayDataExample = {
//   subjects: [
//     {
//       name: 'Cálculo 1',
//       code: 'ELP21',
//       class: 'S11',
//       locationCode: 'CQ201',
//       timeStartCode: 'T1',
//       timeEndCode: 'T4',
//     },
//     {
//       name: 'Cálculo 1',
//       code: 'ELP21',
//       class: 'S11',
//       locationCode: 'CQ201',
//       timeStartCode: 'T1',
//       timeEndCode: 'T4',
//     },
//   ],
// };

const DayOfTheWeek = ({ dayNumber = 0, dayData, ...rest }) => {
  const navigation = useNavigation();

  const isToday = useMemo(() => {
    let date = new Date();
    return dayNumber === date.getDay() + 1;
  }, [dayNumber]);

  const handleEdit = useCallback(() => {
    navigation.navigate(screenNames.EditTimetable, {
      subjects: dayData.subjects,
      dayNumber: dayNumber,
    });
  }, [dayNumber, dayData, navigation]);

  return (
    <Container {...rest}>
      <TopView>
        <DayOfTheWeekText isToday={isToday}>
          {isToday && 'Hoje - '}
          {daysOfTheWeek[dayNumber]} [{dayNumber}]
        </DayOfTheWeekText>

        <EditButton onPress={handleEdit}>
          <Icon name="pencil" color={Colors.orange} size={18} />
        </EditButton>
      </TopView>

      <View style={{ height: 5 }} />

      {dayData.subjects.map((item, index) => (
        <Subject key={index} data={item} style={{ marginBottom: 10 }} />
      ))}
    </Container>
  );
};

export default DayOfTheWeek;
