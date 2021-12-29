import { Axios, AxiosResponse } from 'axios';

class CoreAPIClient {
    private axiosClient: Axios;

    constructor() {
        this.axiosClient = new Axios({
            baseURL: process.env.SERVER_URL,
        });
    }

    setToken = (token: string) => {
        this.axiosClient.defaults.headers.common = {
            'Authorization': `Bearer ${token}`
        }
    }

    post = async <T, K>(endpoint: string, data: K): Promise<AxiosResponse<T>> => {
        return this.axiosClient.post<T>(endpoint, data);
    }
    
    get = async <T, K>(endpoint: string, data?: K): Promise<AxiosResponse<T>> => {
        return this.axiosClient.get<T>(endpoint, data);
    }
}

export const coreAPIClient = new CoreAPIClient();