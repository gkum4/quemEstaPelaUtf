import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppProvider from './src/hooks';
import Routes from './src/routes';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
