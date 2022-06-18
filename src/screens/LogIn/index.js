import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import Colors from '../../Styles/Colors';
import screenNames from '../../routes/screensNames';
import { useAuth } from '../../hooks/auth';
import checkIfIsAValidEmail from '../../Utils/checkIfIsAValidEmail';
import {
  AdminButtonContainer,
  AdminButtonText,
  Container,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';
import DismissKeyboardContainer from '../../Components/DismissKeyboardContainer';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const { logIn, adminLogIn } = useAuth();

  const clearFields = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  const handleAdminLogIn = useCallback(async () => {
    setIsLoading(true);

    const logInData = { password };

    if (checkIfIsAValidEmail(email)) {
      logInData.email = email;
    } else {
      logInData.username = email;
    }

    try {
      await adminLogIn(logInData);
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao tentar fazer log in, cheque as credenciais.',
      );
      return;
    } finally {
      setIsLoading(false);
    }

    clearFields();
    navigation.navigate(screenNames.AdminStack);
  }, [email, password, navigation, adminLogIn, clearFields]);

  const handleLogIn = useCallback(async () => {
    setIsLoading(true);

    const logInData = { password };

    if (checkIfIsAValidEmail(email)) {
      logInData.email = email;
    } else {
      logInData.username = email;
    }

    try {
      await logIn(logInData);
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao tentar fazer log in, cheque as credenciais.',
      );
      return;
    } finally {
      setIsLoading(false);
    }

    clearFields();
    navigation.navigate(screenNames.FooterNavigator);
  }, [email, password, navigation, logIn, clearFields]);

  const handleCreateAccount = useCallback(() => {
    navigation.navigate(screenNames.SignUp);
  }, [navigation]);

  const handleForgotPassword = useCallback(() => {
    navigation.navigate(screenNames.PasswordRecovery);
  }, [navigation]);

  return (
    <DismissKeyboardContainer>
      <Container>
        <TextField placeholder="Email ou Username" value={email} onValueChange={setEmail} />
        <TextField
          style={{ marginTop: 20 }}
          placeholder="Senha"
          value={password}
          onValueChange={setPassword}
          secureTextEntry
        />

        <Button
          title="Log In"
          onPress={isAdmin ? handleAdminLogIn : handleLogIn}
          style={{ marginTop: 30 }}
          disabled={!email || !password}
          loading={isLoading}
        />

        <ForgotPasswordButton style={{ marginTop: 20 }} onPress={handleForgotPassword}>
          <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPasswordButton>

        <Button
          title="Criar conta"
          onPress={handleCreateAccount}
          isGreen
          style={{ marginTop: 40 }}
        />

        <AdminButtonContainer onPress={() => setIsAdmin(!isAdmin)}>
          <Icon name={isAdmin ? 'checkmark-circle' : 'ellipse'} size={29} color={Colors.gray} />
          <AdminButtonText>Admin</AdminButtonText>
        </AdminButtonContainer>
      </Container>
    </DismissKeyboardContainer>
  );
};

export default LogIn;
