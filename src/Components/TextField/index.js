import React from 'react';
import { Container, Label, TextInputContainer, TextInput } from './styles';

const TextField = ({
  placeholder = '',
  value = '',
  onValueChange = () => {},
  style = {},
  secureTextEntry = false,
}) => {
  return (
    <Container style={style}>
      <TextInputContainer>
        <TextInput
          keyboardType="email-address"
          placeholder={placeholder}
          placeholderTextColor="#707070"
          value={value}
          onChangeText={onValueChange}
          secureTextEntry={secureTextEntry}
        />
      </TextInputContainer>
    </Container>
  );
};

export default TextField;
