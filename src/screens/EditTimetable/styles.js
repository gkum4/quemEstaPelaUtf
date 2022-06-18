import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  position: relative;
`;

export const List = styled.FlatList`
  flex: 1;
  flex-direction: column;
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

export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UndoButton = styled.TouchableOpacity`
  background-color: ${Colors.green};
  border-radius: 25px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: ${Colors.green};
  border-radius: 25px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
