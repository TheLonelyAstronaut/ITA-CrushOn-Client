export type AuthTokens = {
    authorizationToken: string;
    refreshToken: string;
};

export type AuthData = {
    username: string;
    password: string;
};

export type RefreshTokenData = {
    refreshToken: string;
};
