import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { RootNavigator } from '../navigation/root-navigator.component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { darkTheme, lightTheme } from '../themes/root.theme';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App: React.FC = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
