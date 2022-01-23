import { NativeModules } from 'react-native';

export type HTTPOptions = {
    baseURL: string;
    headers: Record<string, string>;
};

export type HTTPResponse<T> = {
    status: number;
    data: T;
};

export class HTTPUtils {
    configure = async (options: HTTPOptions): Promise<number> => {
        return NativeModules.HTTPUtils.configure(options);
    };

    get = async <T>(endpoint: string): Promise<HTTPResponse<T>> => {
        return NativeModules.HTTPUtils.getRequest({
            endpoint,
        });
    };

    post = async <T, K extends Record<string, unknown>>(endpoint: string, data: K): Promise<HTTPResponse<T>> => {
        return NativeModules.HTTPUtils.postRequest({
            endpoint,
            data,
        });
    };
}

export const httpUtils = new HTTPUtils();
