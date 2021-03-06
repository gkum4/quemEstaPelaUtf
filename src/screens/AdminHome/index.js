import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, View, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import generateUsersListHtml from './generateUsersListHtml';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import LogOutButton from './LogOutButton';
import ShareButton from './ShareButton';
import RegisteredUser from './RegisteredUser';
import { Container, UserList } from './styles';

const AdminHome = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const { signOut } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('admin/users');
        setRegisteredUsers(response.data.users);
      } catch (_) {
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao tentar listar os usuários cadastrados, tente novamente.',
        );
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const handleLogOut = useCallback(async () => {
    Alert.alert('Sair', 'Tem certeza que deseja sair?', [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: async () => await signOut(),
      },
    ]);
  }, [signOut]);

  const shareUsersListPdfFile = useCallback(async () => {
    const usersListPdfFile = await RNHTMLtoPDF.convert({
      html: generateUsersListHtml(registeredUsers),
      fileName: 'QuemEstaPelaUtf - Lista de usuários cadastrados no banco de dados',
      directory: 'Documents',
    });

    Share.share({
      url: usersListPdfFile.filePath,
    });
  }, [registeredUsers]);

  const handleShare = useCallback(() => {
    Alert.alert(
      'Gerar PDF da lista de usuários',
      'Tem certeza que deseja gerar um PDF com a lista de todos os usuários cadastrados no banco de dados? (Isso pode demorar um pouco).',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Gerar PDF',
          style: 'default',
          onPress: shareUsersListPdfFile,
        },
      ],
    );
  }, [shareUsersListPdfFile]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <LogOutButton onPress={handleLogOut} />,
      headerRight: () => <ShareButton onPress={handleShare} />,
    });
  }, [handleLogOut, handleShare, navigation]);

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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <UserList
          ListHeaderComponent={() => <View style={{ height: 30 }} />}
          data={registeredUsers}
          renderItem={({ item }) => (
            <RegisteredUser data={item} handleDelete={() => showDeleteUserAlert(item)} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
        />
      )}
    </Container>
  );
};

export default AdminHome;
