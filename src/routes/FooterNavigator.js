import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import screenNames from './screensNames';
import Home from '../screens/Home';
import PersonalTimetable from '../screens/PersonalTimetable';
import TabBarIcon from './TabBarIcon';
import Colors from '../Styles/Colors';

const Footer = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Footer.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{ tabBarActiveTintColor: Colors.orange }}>
      <Footer.Screen
        name={screenNames.Home}
        component={Home}
        options={{
          title: 'Quem está pela UTF',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Footer.Screen
        name={screenNames.PersonalTimetable}
        component={PersonalTimetable}
        options={{
          title: 'Grade pessoal',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Footer.Navigator>
  );
};

export default FooterNavigator;
