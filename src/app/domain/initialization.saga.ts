import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { coreAPIClient } from "../../core/data/api/core.api";
import { AUTHENTICATE, GET_USER_INFO } from "../../core/data/store/user/user.actions";
import { splashscreen } from "../../core/util/splashscreen.util";
import { tokenRepository } from "../../core/util/token-repository.util";
import { loginService } from "../../features/login/data/api/impl/login-service-impl.api";
import { profileService } from "../../features/profile/data/api/impl/profile-service-impl.api";


export function* initializationSaga(): SagaIterator {
    //get cities and passions data from server...

    const token = yield call(tokenRepository.getAuthTokenFromStorage);

    if (token) {
        yield call(coreAPIClient.setToken, token);
        const response = yield call(profileService.getUserInfo);

        if(response.data) {
            yield put(GET_USER_INFO(response.data));
            yield put(AUTHENTICATE.LOGIN());
        } else {
            yield call(coreAPIClient.clearAuthorizationHeaders);
            const refreshToken = yield call(tokenRepository.getRefreshTokenFromStorage);

            const response = yield call(loginService.refreshTokens, refreshToken);

            if(response.data) {
                yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken)
                yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken)
                yield call(coreAPIClient.setToken, response.data.authorizationToken);

                const userResponse = yield call(profileService.getUserInfo);

                yield put(GET_USER_INFO(userResponse.data));
                yield put(AUTHENTICATE.LOGIN());
            }
        }
        
    }

    setTimeout(splashscreen.hide, 500);
}