import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../navigation/root-navigator.component';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../../features/themes/themes';

const App = () => {

  return (
    <ThemeProvider theme={darkTheme}> 
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
