import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import store from '../../data/store/store';
import { RootNavigator } from '../navigation/root-navigator.component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { darkTheme, lightTheme, ThemesEnum } from '../themes/root.theme';
import { ConnectedThemeProvider } from '../themes/theme-provider';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ConnectedThemeProvider>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </ConnectedThemeProvider>
        </Provider>
    );
};

export default App;
