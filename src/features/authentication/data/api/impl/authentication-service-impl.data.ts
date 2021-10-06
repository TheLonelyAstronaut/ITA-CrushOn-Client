import {AuthenticationService} from "../authentication-service.data";
import {ApiClient} from "../../../../../core/data/api/api-client.data";
import {apiClient} from "../../../../../core/data/api/impl/api-client-impl.data";

class AuthenticationServiceImpl implements AuthenticationService {
	constructor(private apiClient: ApiClient) {}

	login(username: string, password: string): void {
		const result = apiClient.post<Boolean>({ username, password })
	}
}

export const authenticationService: AuthenticationService = new AuthenticationServiceImpl(apiClient)
