import React, { useMemo } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import daysOfTheWeek from '../../Utils/daysOfTheWeek';
import Subject from '../Subject';
import { Container, TopView, DayOfTheWeekText, EditButton, EmptyText } from './styles';
import Colors from '../../Styles/Colors';

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

const SubjectsOfTheDay = ({
  dayNumber = 0,
  dayData,
  canEdit = false,
  handleEdit = () => {},
  ...rest
}) => {
  const isToday = useMemo(() => {
    let date = new Date();
    return dayNumber === date.getDay() + 1;
  }, [dayNumber]);

  return (
    <Container {...rest}>
      <TopView>
        <DayOfTheWeekText isToday={isToday}>
          {isToday && 'Hoje - '}
          {daysOfTheWeek[dayNumber]} [{dayNumber}]
        </DayOfTheWeekText>

        {canEdit && (
          <EditButton onPress={handleEdit}>
            <Icon name="pencil" color={Colors.orange} size={18} />
          </EditButton>
        )}
      </TopView>

      <View style={{ height: 5 }} />

      {dayData.subjects.length === 0 && <EmptyText>-</EmptyText>}

      {dayData.subjects.map((item, index) => (
        <Subject key={index} data={item} style={{ marginBottom: 10 }} />
      ))}
    </Container>
  );
};

export default SubjectsOfTheDay;
