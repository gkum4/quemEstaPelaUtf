import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Styles/Colors';

import { Container, DeleteButton, DetailsText, Row, UserText } from './styles';

const RegisteredUser = ({ data, handleDelete }) => {
  const formattedCreationDate = useMemo(() => {
    const date = new Date(data.createdAt);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? '0' + day : `${day}`;
    const formattedMonth = month < 10 ? '0' + month : `${month}`;

    return formattedDay + '/' + formattedMonth + '/' + year;
  }, [data.createdAt]);

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
