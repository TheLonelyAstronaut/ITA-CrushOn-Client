import { APIClient } from '../../../../../core/data/api/api-client.api';
import { apiClient } from '../../../../../core/data/api/impl/api-client-impl.api';
import { LoginService } from '../login-service.api';

class LoginServiceImpl implements LoginService {
    constructor(private apiClient: APIClient) {}

    login(username: string, password: string): void {
        const result = apiClient.post<boolean>({ username, password });
    }
}

export const loginService: LoginService = new LoginServiceImpl(apiClient);
