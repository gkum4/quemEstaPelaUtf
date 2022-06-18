import { Keyboard } from 'react-native';
import styled from 'styled-components/native';

const DismissKeyboardContainer = styled.TouchableWithoutFeedback.attrs({
  onPress: () => Keyboard.dismiss(),
})``;

export default DismissKeyboardContainer;
