import { LogBox } from 'react-native';

import { analytics, EVENTS_LIST } from './analytics.util';
import { crashlytics } from './crashlytics.util';

export class Logger {
    log = <T extends Array<unknown>>(...data: T): void => {
        console.log(...data);

        const key = Object.values(EVENTS_LIST).indexOf(data[0] as string);

        if (key != -1) {
            analytics.log(data[0] as string, (data[1] as Record<string, string>) ?? {}).catch(this.error);
        }
    };

    error = (data: unknown): void => {
        console.warn(data);

        if ((data as Error)?.message) {
            // To sort JS errors from debug .error calls
            crashlytics.error(data as Error).catch(console.warn);
        }
    };

    configure = (): void => {
        LogBox.ignoreLogs([
            'VirtualizedLists should never be nested',
            'Non-serializable values were found',
            "The writer you're trying to run",
        ]);
    };
}

export const logger = new Logger();
