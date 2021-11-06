import {APIClient} from '../api-client.api';

class APIClientImpl implements APIClient {
	post<T>(body: Object): T {
		return body as T;
	}
}

export const apiClient: APIClient = new APIClientImpl()
