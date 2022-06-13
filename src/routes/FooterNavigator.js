import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import PersonalTimetableStack from './PersonalTimetableStack';
import screenNames from './screensNames';
import Colors from '../Styles/Colors';

const Footer = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Footer.Navigator
      initialRouteName={screenNames.Home}
      screenOptions={{
        tabBarActiveTintColor: Colors.orange,
        header: () => null,
      }}>
      <Footer.Screen
        name={screenNames.HomeStack}
        component={HomeStack}
        options={{
          title: 'Quem está pela UTF',
          tabBarIcon: ({ color, size }) => <Icon name="home-sharp" color={color} size={size} />,
        }}
      />
      <Footer.Screen
        name={screenNames.PersonalTimetableStack}
        component={PersonalTimetableStack}
        options={{
          title: 'Sua grade',
          tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
        }}
      />
    </Footer.Navigator>
  );
};

export default FooterNavigator;
