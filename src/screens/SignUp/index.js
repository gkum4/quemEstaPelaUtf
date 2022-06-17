import React, { useCallback, useState } from 'react';
import { useMemo } from 'react';
import { Alert } from 'react-native';

import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import api from '../../services/api';
import checkIfIsAValidEmail from '../../Utils/checkIfIsAValidEmail';
import { Container } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [createdAccount, setCreatedAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasEmptyField = useMemo(() => {
    if (!email || !username || !password || !passwordConfirmation) {
      return true;
    }

    return false;
  }, [email, username, password, passwordConfirmation]);

  const handleCreateAccount = useCallback(async () => {
    if (!checkIfIsAValidEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, digite um email válido.');
      return;
    }

    if (password !== passwordConfirmation) {
      Alert.alert('Senhas diferentes', 'Por favor, digite senhas iguais.');
      return;
    }

    setIsLoading(true);

    try {
      await api.post('auth/signup', { email, username, password });
    } catch (error) {
      Alert.alert(
        'Erro ao criar conta',
        'Ocorreu um erro ao tentar criar a conta, cheque as credenciais e tente novamente.',
      );
      return;
    } finally {
      setIsLoading(false);
    }

    setCreatedAccount(true);
  }, [email, username, password, passwordConfirmation]);

  return (
    <Container>
      <TextField
        placeholder="Email"
        value={email}
        onValueChange={setEmail}
        keyboardType="email-address"
      />

      <TextField
        placeholder="Username"
        value={username}
        onValueChange={setUsername}
        style={{ marginTop: 20 }}
      />

      <TextField
        placeholder="Senha"
        value={password}
        onValueChange={setPassword}
        style={{ marginTop: 20 }}
        secureTextEntry
      />

      <TextField
        placeholder="Confirmação de senha"
        value={passwordConfirmation}
        onValueChange={setPasswordConfirmation}
        style={{ marginTop: 20 }}
        secureTextEntry
      />

      <Button
        title={createdAccount ? 'Conta Criada' : 'Criar Conta'}
        isGreen={createdAccount ? false : true}
        onPress={handleCreateAccount}
        style={{ marginTop: 30 }}
        disabled={createdAccount || hasEmptyField}
        loading={isLoading}
      />
    </Container>
  );
};

export default SignUp;
