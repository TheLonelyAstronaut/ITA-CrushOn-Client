import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { navigationService } from '../../../core/util/navigation-container.util';
import { notificationService, RemoteMessage } from '../../../core/util/notification-service.utils';
import { useStore } from '../../data/store/store';
import { RootNavigator } from '../navigation/root-navigator.component';
import { ConnectedThemeProvider } from '../themes/theme-provider';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App: React.FC = () => {
    const redux = useStore();

    useEffect(() => {
        //iOS only, not working without dev account
        notificationService.requestPermissions().catch(console.log);
        return notificationService.addForegroundMessageHandler((message: RemoteMessage) => console.log(message));
    }, []);

    if (!redux) {
        return null;
    }

    return (
        <Provider store={redux.store}>
            <PersistGate persistor={redux.persistor}>
                <ConnectedThemeProvider>
                    <NavigationContainer ref={navigationService.setNavigationContainerRef}>
                        <RootNavigator />
                    </NavigationContainer>
                </ConnectedThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
