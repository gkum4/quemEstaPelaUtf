import React from 'react';
import DayOfTheWeek from './DayOfTheWeek';
import { Container } from './styles';

const daysData = {
  2: {
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
  return (
    <Container>
      <DayOfTheWeek
        dayData={daysData[2]}
        dayNumber={2}
        style={{ marginTop: 20 }}
      />
      <DayOfTheWeek
        dayData={daysData[3]}
        dayNumber={3}
        style={{ marginTop: 20 }}
      />
      <DayOfTheWeek
        dayData={daysData[4]}
        dayNumber={4}
        style={{ marginTop: 20 }}
      />
      <DayOfTheWeek
        dayData={daysData[5]}
        dayNumber={5}
        style={{ marginTop: 20 }}
      />
      <DayOfTheWeek
        dayData={daysData[6]}
        dayNumber={6}
        style={{ marginTop: 20 }}
      />
      <DayOfTheWeek
        dayData={daysData[7]}
        dayNumber={7}
        style={{ marginTop: 20 }}
      />
    </Container>
  );
};

export default PersonalTimetable;
