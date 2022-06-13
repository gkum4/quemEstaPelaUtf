import React, { useCallback, useEffect, useState } from 'react';

import { Container, DateText, TimeText } from './styles';

const daysOfTheWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const monthsNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const Clock = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [dayOfTheWeek, setDayOfTheWeek] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  useEffect(() => {
    const update = () => {
      const currentDate = new Date();
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
      const currentDay = currentDate.getDate().toString();
      const currentMonth = monthsNames[currentDate.getMonth()];

      setHours(currentHours < 10 ? `0${currentHours}` : `${currentHours}`);
      setMinutes(currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`);
      setDayOfTheWeek(currentDayOfTheWeek);
      setDay(currentDay);
      setMonth(currentMonth);
    };

    update();

    setInterval(update, 3000);
  }, []);

  return (
    <Container>
      <TimeText>
        {hours}:{minutes}
      </TimeText>
      <DateText>
        {dayOfTheWeek}, {day} de {month}
      </DateText>
    </Container>
  );
};

export default Clock;
