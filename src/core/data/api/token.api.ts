import { AuthData } from "../store/user/user.state";

import { coreAPIClient } from "./core.api";

export class TokenAPIClient {
    getToken(authData: AuthData): any {
        //const token = coreAPIClient.get('/auth', authData);
        const myAuthData: AuthData = {
            login: 'Asdf',
            password: 'asdf',
        };
        if (JSON.stringify(authData) === JSON.stringify(myAuthData)) {
            return 'asdfasdfasdf';
        } else {
            return '';
        }
    }
}

export const tokenAPIClient = new TokenAPIClient();