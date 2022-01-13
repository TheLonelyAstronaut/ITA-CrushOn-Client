import SInfo from 'react-native-sensitive-info';


class TokenRepository {
    private async saveTokenToStorage(key: string, token: string) {
        await SInfo.setItem(key, token, {});
    }

    private async getTokenFromStorage(key: string): Promise<string> {
        try {
            const token = await SInfo.getItem(key, {});
            if (token) {
                return token;
            } else {
                return '';
            }
        } catch (error) {
            console.log('failed to retrieve token from secure storage', error);
        }

        return '';
    }

    saveAuthTokenToStorage = async (token: string) => {
        await this.saveTokenToStorage('auth_token', token);
    }

    saveRefreshTokenToStorage = async (token: string) => {
        await this.saveTokenToStorage('refresh_token', token);
    }

    getAuthTokenFromStorage = async (): Promise<string> => {
        return this.getTokenFromStorage('auth_token');
    }

    getRefreshTokenFromStorage = async (): Promise<string> => {
        return this.getTokenFromStorage('refresh_token');
    }

    clearTokens = async () => {
        await SInfo.deleteItem('auth_token', {});
        await SInfo.deleteItem('refresh_token', {});
    }
}

export const tokenRepository = new TokenRepository();