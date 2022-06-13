import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderBackButton from './HeaderBackButton';
import AdminHome from '../screens/AdminHome';
import screenNames from './screensNames';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.AdminHome}
      screenOptions={{ headerLeft: () => <HeaderBackButton /> }}>
      <Stack.Screen
        name={screenNames.AdminHome}
        component={AdminHome}
        options={{ title: 'Usuários cadastrados', headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
