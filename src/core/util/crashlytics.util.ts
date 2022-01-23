import RNCrashlytics from '@react-native-firebase/crashlytics';

import { User } from '../model/user.model';

import { logger } from './logger.util';

export class Crashlytics {
    setUser = async (user: User): Promise<void> => {
        Promise.all([
            RNCrashlytics().setUserId(user.id.toString()),
            RNCrashlytics().setAttributes({
                username: user.username,
                name: user.name,
            }),
        ]).catch(logger.error);
    };

    log = async (message: string): Promise<void> => {
        return RNCrashlytics().log(message);
    };

    error = async (error: Error): Promise<void> => {
        return RNCrashlytics().recordError(error);
    };

    testCrash = (): void => {
        setTimeout(RNCrashlytics().crash, 5000);
    };
}

export const crashlytics = new Crashlytics();
