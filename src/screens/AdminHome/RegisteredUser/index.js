import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Styles/Colors';

import { Container, DeleteButton, DetailsText, Row, UserText } from './styles';

const RegisteredUser = ({ data, handleDelete }) => {
  const formattedCreationDate = useMemo(() => {
    return '01/01/2000';
  }, [data.created_at]);

  return (
    <Container>
      <Row>
        <UserText>{data.username}</UserText>

        <DeleteButton onPress={handleDelete}>
          <Icon name="trash-outline" size={18} color={Colors.red} />
        </DeleteButton>
      </Row>

      <DetailsText style={{ marginTop: 5 }}>Conta criada em {formattedCreationDate}</DetailsText>
    </Container>
  );
};

export default RegisteredUser;
