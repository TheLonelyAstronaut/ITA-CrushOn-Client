import { AuthTokens } from '../../../../core/model/auth.model';
import { HTTPResponse } from '../../../../core/util/http-utils.util';

export interface LoginService {
    login: (username: string, password: string) => Promise<HTTPResponse<AuthTokens>>;
    refreshTokens: (refreshToken: string) => Promise<HTTPResponse<AuthTokens>>;
    logout: (token: string) => void;
}
