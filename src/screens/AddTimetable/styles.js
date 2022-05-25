import styled from 'styled-components/native';
import Colors from '../../Styles/Colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: white;
`;

export const AddedTimetableText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${Colors.gray};
  margin-top: 20px;
  text-align: center;
  max-width: 200px;
`;

export const AddOtherTimetableButton = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const AddOtherTimetableText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.orange};
`;
