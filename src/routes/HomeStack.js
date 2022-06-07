import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddTimetable from '../screens/AddTimetable';
import Home from '../screens/Home';
import PersonalTimetable from '../screens/PersonalTimetable';
import screenNames from './screensNames';
import HeaderBackButton from './HeaderBackButton';
import SomeoneTimetable from '../screens/SomeoneTimetable';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{ headerLeft: () => <HeaderBackButton /> }}>
      <Stack.Screen
        name={screenNames.Home}
        component={Home}
        options={{ title: 'Quem está pela UTF', headerLeft: null }}
      />
      <Stack.Screen
        name={screenNames.AddTimetable}
        component={AddTimetable}
        options={{ title: 'Adicionar grade' }}
      />
      <Stack.Screen
        name={screenNames.SomeoneTimetable}
        component={SomeoneTimetable}
        options={{ title: 'Grade de ...' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
