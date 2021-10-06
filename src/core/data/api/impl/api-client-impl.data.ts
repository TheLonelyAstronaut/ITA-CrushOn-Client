import {ApiClient} from '../api-client.data';

class ApiClientImpl implements ApiClient {
	post<T>(body: Object): T {
		return body as T;
	}
}

export const apiClient: ApiClient = new ApiClientImpl()
