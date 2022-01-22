export class Logger {
    log = <T extends Array<unknown>>(...data: T): void => {
        console.log(...data);
    };

    error = (data: unknown): void => {
        console.warn(data);
    };
}

export const logger = new Logger();
