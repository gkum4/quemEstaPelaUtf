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
      const currentHours = currentDate.getHours().toString();
      const currentMinutes = currentDate.getMinutes().toString();
      const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
      const currentDay = currentDate.getDate().toString();
      const currentMonth = monthsNames[currentDate.getMonth()];

      setHours(currentHours === '0' ? '00' : currentHours);
      setMinutes(currentMinutes === '0' ? '00' : currentMinutes);
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
        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}
      </TimeText>
      <DateText>
        {dayOfTheWeek}, {day} de {month}
      </DateText>
    </Container>
  );
};

export default Clock;
