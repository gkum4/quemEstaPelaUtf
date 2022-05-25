import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: white;
  position: relative;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.orange};
`;

export const AdminButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 20px;
  left: 20px;
  align-items: center;
`;

export const AdminButtonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
  color: ${Colors.gray};
`;
