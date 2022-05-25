import React, { useCallback, useState } from 'react';

import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import { Container, EmailSentText } from './styles';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleRecoverPassword = useCallback(() => {
    console.log(email);
    setEmailSent(true);
  }, [email]);

  return (
    <Container>
      <TextField
        placeholder="Email cadastrado"
        value={email}
        onValueChange={setEmail}
      />

      <Button
        title={emailSent ? 'Enviado' : 'Recuperar'}
        onPress={handleRecoverPassword}
        style={{ marginTop: 30 }}
        disabled={emailSent}
      />

      {emailSent && (
        <EmailSentText>Senha enviada para o email informado</EmailSentText>
      )}
    </Container>
  );
};

export default PasswordRecovery;
