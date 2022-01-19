/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/app/presentation/screens/app.component';
import './src/app/presentation/i18n/i18n';
import { notificationService } from './src/core/util/notification-service'

notificationService.addBackgroundMessageHandler(async (message) => {
    console.log(message);
});

AppRegistry.registerComponent(appName, () => App);
