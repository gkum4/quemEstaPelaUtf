import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './src/routes/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
