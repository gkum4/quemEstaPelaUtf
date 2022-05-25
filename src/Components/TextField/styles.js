import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const TextInputContainer = styled.View`
  display: flex;
  justify-content: center;
  background-color: ${Colors.lightGray};
  border-radius: 20px;
  width: 100%;
`;

export const TextInput = styled.TextInput`
  padding: 20px;
  font-size: 14px;
`;
