import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../screens/LogIn';
import PasswordRecovery from '../screens/PasswordRecovery';
import SignUp from '../screens/SignUp';
import screenNames from './screensNames';
import FooterNavigator from './FooterNavigator';
import HeaderBackButton from './HeaderBackButton';
import AdminStack from './AdminStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.LogIn}
      screenOptions={{ headerLeft: () => <HeaderBackButton /> }}>
      <Stack.Screen
        name={screenNames.LogIn}
        component={LogIn}
        options={{ title: 'Quem está pela UTF', headerLeft: null }}
      />
      <Stack.Screen
        name={screenNames.PasswordRecovery}
        component={PasswordRecovery}
        options={{ title: 'Recuperação de senha' }}
      />
      <Stack.Screen
        name={screenNames.SignUp}
        component={SignUp}
        options={{ title: 'Criar conta' }}
      />
      <Stack.Screen
        name={screenNames.AdminStack}
        component={AdminStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.FooterNavigator}
        component={FooterNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
