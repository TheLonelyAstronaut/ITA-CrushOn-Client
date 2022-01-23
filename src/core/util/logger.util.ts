import { LogBox } from 'react-native';

export class Logger {
    log = <T extends Array<unknown>>(...data: T): void => {
        console.log(...data);
    };

    error = (data: unknown): void => {
        console.warn(data);
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
