import { AxiosResponse } from "axios";

import { AuthTokens } from "../../../../core/model/auth.model";

export interface LoginService {
    login: (username: string, password: string) => Promise<AxiosResponse<AuthTokens>>;
    refreshTokens: (refreshToken: string) => Promise<AxiosResponse<AuthTokens>>;
}
