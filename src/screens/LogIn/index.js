import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import Colors from '../../Styles/Colors';
import {
  AdminButtonContainer,
  AdminButtonText,
  Container,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';
import screenNames from '../../routes/screensNames';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);

  const navigation = useNavigation();

  const handleLogIn = useCallback(() => {
    console.log('Email ' + email);
    console.log('Password ' + password);
    navigation.navigate(screenNames.FooterNavigator);
  }, [email, password, navigation]);

  const handleCreateAccount = useCallback(() => {
    navigation.navigate(screenNames.SignUp);
  }, [navigation]);

  const handleForgotPassword = useCallback(() => {
    navigation.navigate(screenNames.PasswordRecovery);
  }, [navigation]);

  return (
    <Container>
      <TextField
        placeholder="Email ou Username"
        value={email}
        onValueChange={setEmail}
      />
      <TextField
        style={{ marginTop: 20 }}
        placeholder="Senha"
        value={password}
        onValueChange={setPassword}
        secureTextEntry
      />

      <Button title="Log In" onPress={handleLogIn} style={{ marginTop: 30 }} />

      <ForgotPasswordButton
        style={{ marginTop: 20 }}
        onPress={handleForgotPassword}>
        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
      </ForgotPasswordButton>

      <Button
        title="Criar conta"
        onPress={handleCreateAccount}
        isGreen
        style={{ marginTop: 40 }}
      />

      <AdminButtonContainer onPress={() => setAdmin(!admin)}>
        <Icon
          name={admin ? 'checkmark-circle' : 'ellipse'}
          size={29}
          color={Colors.gray}
        />
        <AdminButtonText>Admin</AdminButtonText>
      </AdminButtonContainer>
    </Container>
  );
};

export default LogIn;
