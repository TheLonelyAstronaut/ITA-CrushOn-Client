import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';

import { navigationService } from '../../../core/util/navigation-container.util';
import { useStore } from '../../data/store/store';
import { RootNavigator } from '../navigation/root-navigator.component';
import { ConnectedThemeProvider } from '../themes/theme-provider';

import messaging from "@react-native-firebase/messaging"
import { notificationService, RemoteMessage } from '../../../core/util/notification-service';

messaging().getToken().then(console.log)

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const App: React.FC = () => {
    const store = useStore();

    useEffect(() => {
        //iOS only, not working without dev account
        notificationService.requestPermissions();
        return notificationService.addForegroundMessageHandler((message: RemoteMessage) => console.log(message));
    }, []);

    if(!store) {
        return null;
    }

    return (
        <Provider store={store.store}>
            <ConnectedThemeProvider>
                <NavigationContainer ref={navigationService.setNavigationContainerRef}>
                    <RootNavigator />
                </NavigationContainer>
            </ConnectedThemeProvider>
        </Provider>
    );
};

export default App;
