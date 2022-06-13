import React, { useState, useCallback, useEffect } from 'react';
import { Alert, View } from 'react-native';
import RegisteredUser from './RegisteredUser';
import { Container, UserList } from './styles';

const sampleData = [
  {
    id: '123',
    username: 'kuma',
    created_at: new Date(),
  },
  {
    id: '1234',
    username: 'kuma2',
    created_at: new Date(),
  },
  {
    id: '1235',
    username: 'kuma3',
    created_at: new Date(),
  },
  {
    id: '1236',
    username: 'kuma4',
    created_at: new Date(),
  },
];

const AdminHome = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const data = sampleData;
    setRegisteredUsers(data);
  }, []);

  const handleDeleteUser = useCallback(
    user => {
      const newData = registeredUsers;
      const index = newData.findIndex(item => item.id === user.id);

      newData.splice(index, 1);
      setRegisteredUsers(newData);
    },
    [registeredUsers],
  );

  const showDeleteUserAlert = useCallback(
    user => {
      Alert.alert(
        `Apagar usuário: ${user.username}`,
        `Usuário ${user.username} será apagado assim como todas as suas referências. Tem certeza que deseja fazer isso?`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Apagar',
            style: 'destructive',
            onPress: () => handleDeleteUser(user),
          },
        ],
      );
    },
    [handleDeleteUser],
  );

  return (
    <Container>
      <UserList
        ListHeaderComponent={() => <View style={{ height: 30 }} />}
        data={sampleData}
        renderItem={({ item }) => (
          <RegisteredUser data={item} handleDelete={() => showDeleteUserAlert(item)} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
      />
    </Container>
  );
};

export default AdminHome;
