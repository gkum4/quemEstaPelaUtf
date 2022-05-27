import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenNames from './screensNames';
import PersonalTimetable from '../screens/PersonalTimetable';
import EditTimetable from '../screens/EditTimetable';

const Stack = createNativeStackNavigator();

const PersonalTimetableStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.PersonalTimetable}
      screenOptions={{ headerBackTitle: 'Voltar' }}>
      <Stack.Screen
        name={screenNames.PersonalTimetable}
        component={PersonalTimetable}
        options={{ title: 'Sua grade' }}
      />
      <Stack.Screen
        name={screenNames.EditTimetable}
        component={EditTimetable}
        options={{ title: '...' }}
      />
    </Stack.Navigator>
  );
};

export default PersonalTimetableStack;
