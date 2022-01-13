import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import { navigationService } from '../../../core/util/navigation-container.utils';
import store from '../../data/store/store';
import { RootNavigator } from '../navigation/root-navigator.component';
import { ConnectedThemeProvider } from '../themes/theme-provider';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ConnectedThemeProvider>
                <NavigationContainer ref={navigationService.setNavigationContainerRef}>
                    <RootNavigator />
                </NavigationContainer>
            </ConnectedThemeProvider>
        </Provider>
    );
};

export default App;
