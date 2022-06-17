import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  background-color: ${({ color }) => color};
  padding: 17px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
    `}
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
