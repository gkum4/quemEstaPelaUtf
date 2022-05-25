import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({ color, size, focused, name }) => {
  return <Icon name={name} color={color} size={size} />;
};

export default TabBarIcon;
