import {AuthenticationService} from "../authentication-service.api";
import {apiClient} from "../../../../../core/data/api/impl/network-service-impl.api";

class ApiClient {
}

class AuthenticationServiceImpl implements AuthenticationService {
	constructor(private apiClient: ApiClient) {}

	login(username: string, password: string): void {
		const result = apiClient.post<Boolean>({ username, password })
	}
}

export const authenticationService: AuthenticationService = new AuthenticationServiceImpl(apiClient)
