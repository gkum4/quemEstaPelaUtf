import styled from 'styled-components/native';
import Colors from '../../../Styles/Colors';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubjectNameText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const SubjectNameTextInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.lightGray,
})`
  font-size: 18px;
  font-weight: 500;
  text-decoration: ${({ value }) => (value !== '' ? 'underline' : 'none')};
`;

export const DeleteButton = styled.TouchableOpacity``;

export const Row = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const Text = styled.Text`
  font-size: 14px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.lightGray,
})`
  font-size: 16px;
  font-weight: 500;
  text-decoration: ${({ value }) => (value !== '' ? 'underline' : 'none')};
`;
