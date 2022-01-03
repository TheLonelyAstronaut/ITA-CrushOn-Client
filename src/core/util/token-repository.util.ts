import * as Keychain from 'react-native-keychain';

class TokenRepository {
    async saveTokenToStorage(username: string, token: string) {
        await Keychain.setGenericPassword(username, token);
    }

    async getTokenFromStorage() {
        try {
            const userCredentials = await Keychain.getGenericPassword();
            if (userCredentials) {
                return userCredentials.password;
            } else {
                return '';
            }
        } catch (error) {
            console.log('failed to retrieve token from secure storage', error);
        }
    }

    async clearToken() {
        await Keychain.resetGenericPassword();
    }
}

export const tokenRepository = new TokenRepository();