import { Axios, AxiosResponse, HeadersDefaults } from 'axios';

export class CoreAPIClient {
    private axiosClient: Axios;

    constructor() {
        this.axiosClient = new Axios({
            baseURL: 'http://localhost:8080/',
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            timeout: 60000,
        });
    }

    setToken = (token: string): void => {
        this.axiosClient.defaults.headers = {
            common: {
                Authorization: token,
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
        } as unknown as HeadersDefaults;
    };

    clearAuthorizationHeaders = (): void => {
        this.axiosClient.defaults.headers = {
            common: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
        } as unknown as HeadersDefaults;
    };

    post = async <T, K, C = undefined>(
        endpoint: string,
        data: K,
        config?: C | undefined
    ): Promise<AxiosResponse<T>> => {
        const response = await this.axiosClient.post(endpoint, JSON.stringify(data), config);

        try {
            return {
                ...response,
                data: JSON.parse(response.data),
            };
        } catch {
            return response;
        }
    };

    sendFile = async <T>(endpoint: string, file: FormData): Promise<AxiosResponse<T>> => {
        return this.axiosClient.post(endpoint, file, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    get = async <T, C = undefined>(endpoint: string, config: C | undefined = undefined): Promise<AxiosResponse<T>> => {
        const response = await this.axiosClient.get(endpoint, config);

        try {
            return {
                ...response,
                data: JSON.parse(response.data),
            };
        } catch {
            return response;
        }
    };
}

export const coreAPIClient = new CoreAPIClient();
