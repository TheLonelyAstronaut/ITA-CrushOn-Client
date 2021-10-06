import {NetworkService} from '../network-service.api';

class NetworkServiceImpl implements NetworkService {
	post<T>(body: Object): T {
		return body as T;
	}
}

export const apiClient: NetworkService = new NetworkServiceImpl()
