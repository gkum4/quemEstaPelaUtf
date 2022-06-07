import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenNames from './screensNames';
import PersonalTimetable from '../screens/PersonalTimetable';
import EditTimetable from '../screens/EditTimetable';
import HeaderBackButton from './HeaderBackButton';

const Stack = createNativeStackNavigator();

const PersonalTimetableStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.PersonalTimetable}
      screenOptions={{ headerLeft: () => <HeaderBackButton /> }}>
      <Stack.Screen
        name={screenNames.PersonalTimetable}
        component={PersonalTimetable}
        options={{ title: 'Sua grade', headerLeft: null }}
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
