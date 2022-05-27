import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

export const TopView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const DayOfTheWeekText = styled.Text`
  font-size: 18px;

  ${({ isToday }) =>
    isToday &&
    css`
      font-weight: bold;
    `}
`;

export const EditButton = styled.TouchableOpacity``;
