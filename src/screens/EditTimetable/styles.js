import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const List = styled.FlatList`
  flex: 1;
  flex-direction: column;
  background-color: white;
  padding: 0 20px;
`;

export const LineSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.lightGray};
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyListText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${Colors.gray};
`;
