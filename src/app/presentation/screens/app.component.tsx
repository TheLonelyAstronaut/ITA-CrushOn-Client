import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../navigation/root-navigator.component';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
};

export default App;
