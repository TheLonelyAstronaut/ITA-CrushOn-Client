import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { RootNavigator } from '../navigation/root-navigator.component';
import { darkTheme } from '../themes/root.theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
