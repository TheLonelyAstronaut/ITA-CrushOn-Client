import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { AuthData, AuthTokens, RefreshTokenData } from '../../../../../core/model/auth.model';
import { HTTPResponse } from '../../../../../core/util/http-utils.util';
import { LoginService } from '../login-service.api';

class LoginServiceImpl implements LoginService {
    constructor(private coreAPI: CoreAPIClient) {}

    refreshTokens = async (refreshToken: string): Promise<HTTPResponse<AuthTokens>> => {
        return this.coreAPI.post<AuthTokens, RefreshTokenData>('/api/v1/auth/refresh_tokens', { refreshToken });
    };

    login = async (username: string, password: string): Promise<HTTPResponse<AuthTokens>> => {
        return this.coreAPI.post<AuthTokens, AuthData>('/api/v1/auth/authenticate', { username, password });
    };

    logout = async (firebaseToken: string) => {
        return this.coreAPI.post('/api/v1/auth/logout', { firebaseToken });
    };
}

export const loginService: LoginService = new LoginServiceImpl(coreAPIClient);
