import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
`;

export const ClockContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactsList = styled.FlatList`
  padding: 0 20px;
`;

export const EmptyListText = styled.Text`
  font-size: 18px;
  color: ${Colors.lightGray};
  text-align: center;
`;
