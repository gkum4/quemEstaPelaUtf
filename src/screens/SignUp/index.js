import React, { useCallback, useState } from 'react';

import Button from '../../Components/Button';
import TextField from '../../Components/TextField';
import { Container } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [createdAccount, setCreatedAccount] = useState(false);

  const handleCreateAccount = useCallback(() => {
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(passwordConfirmation);

    setCreatedAccount(true);
  }, [email, username, password, passwordConfirmation]);

  return (
    <Container>
      <TextField placeholder="Email" value={email} onValueChange={setEmail} />

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
      />

      <TextField
        placeholder="Confirmação de senha"
        value={passwordConfirmation}
        onValueChange={setPasswordConfirmation}
        style={{ marginTop: 20 }}
      />

      <Button
        title={createdAccount ? 'Conta Criada' : 'Criar Conta'}
        isGreen={createdAccount ? false : true}
        onPress={handleCreateAccount}
        style={{ marginTop: 30 }}
        disabled={createdAccount}
      />
    </Container>
  );
};

export default SignUp;
