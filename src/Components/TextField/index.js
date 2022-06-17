import React from 'react';
import { Container, Label, TextInputContainer, TextInput } from './styles';

const TextField = ({
  placeholder = '',
  value = '',
  onValueChange = () => {},
  style = {},
  secureTextEntry = false,
  ...rest
}) => {
  return (
    <Container style={style}>
      <TextInputContainer>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#707070"
          value={value}
          onChangeText={onValueChange}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />
      </TextInputContainer>
    </Container>
  );
};

export default TextField;
