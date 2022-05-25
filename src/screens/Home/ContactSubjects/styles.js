import styled from 'styled-components/native';
import Colors from '../../../Styles/Colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const UsernameButton = styled.TouchableOpacity``;

export const UsernameText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${Colors.orange};
`;
