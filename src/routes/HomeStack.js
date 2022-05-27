import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddTimetable from '../screens/AddTimetable';
import Home from '../screens/Home';
import PersonalTimetable from '../screens/PersonalTimetable';
import screenNames from './screensNames';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{ headerBackTitle: 'Voltar' }}>
      <Stack.Screen
        name={screenNames.Home}
        component={Home}
        options={{ title: 'Quem está pela UTF', headerBackVisible: false }}
      />
      <Stack.Screen
        name={screenNames.AddTimetable}
        component={AddTimetable}
        options={{ title: 'Adicionar grade' }}
      />
      <Stack.Screen
        name={screenNames.PersonalTimetable}
        component={PersonalTimetable}
        options={{ title: 'Sua grade' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
