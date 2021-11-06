import { APIClient } from '../api-client.api';

class APIClientImpl implements APIClient {
    post<R, T>(body: R): T {
        return body as unknown as T;
    }
}

export const apiClient: APIClient = new APIClientImpl();
