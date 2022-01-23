import { Axios, AxiosResponse, HeadersDefaults } from 'axios';

import { HTTPResponse, httpUtils } from '../../util/http-utils.util';

//export const SERVER_ENDPOINT = Platform.OS === 'android' ? '10.0.2.2:8080' : 'localhost:8080';
export const SERVER_ENDPOINT = '192.168.31.233:8080'

export class CoreAPIClient {
    private uploader: Axios;

    constructor() {
        this.uploader = new Axios({
            baseURL: `http://${SERVER_ENDPOINT}`,
            timeout: 60000,
        });
    }

    configure = async (): Promise<void> => {
        this.uploader.defaults.headers = {
            common: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
        } as unknown as HeadersDefaults;

        httpUtils.configure({
            baseURL: `http://${SERVER_ENDPOINT}`,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
        });
    }

    setToken = async (token: string): Promise<void> => {
        this.uploader.defaults.headers = {
            common: {
                Authorization: token,
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
        } as unknown as HeadersDefaults;

        httpUtils.configure({
            baseURL: `http://${SERVER_ENDPOINT}`,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                Authorization: token
            },
        });
    };

    clearAuthorizationHeaders = async (): Promise<void> => {
       this.configure();
    };

    post = async <T, K extends Record<string, unknown>>(
        endpoint: string,
        data: K
    ): Promise<HTTPResponse<T>> => {
        return httpUtils.post(endpoint, data);
    };

    sendFile = async <T>(endpoint: string, file: FormData): Promise<AxiosResponse<T>> => {
        return this.uploader.post(endpoint, file, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    get = async <T>(endpoint: string): Promise<HTTPResponse<T>> => {
        return httpUtils.get(endpoint);
    };
}

export const coreAPIClient = new CoreAPIClient();
