import styled from 'styled-components/native';
import Colors from '../../../Styles/Colors';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const UserText = styled.Text`
  color: ${Colors.orange};
  font-size: 18px;
  font-weight: 500;
`;

export const DetailsText = styled.Text`
  font-size: 14px;
`;
