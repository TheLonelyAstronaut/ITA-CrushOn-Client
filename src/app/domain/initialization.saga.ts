import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { coreAPIClient } from '../../core/data/api/core.api';
import { GET_CITIES_DATA, GET_PASSIONS_DATA } from '../../core/data/store/remote-config/remote-config.actions';
import { AUTHENTICATE, GET_USER_INFO } from '../../core/data/store/user/user.actions';
import { splashscreen } from '../../core/util/splashscreen.util';
import { tokenRepository } from '../../core/util/token-repository.util';
import { cardsService } from '../../features/cards/data/api/impl/cards-service-impl.api';
import { loginService } from '../../features/login/data/api/impl/login-service-impl.api';
import { profileService } from '../../features/profile/data/api/impl/profile-service-impl.api';

export function* initializationSaga(): SagaIterator {
    const citiesResponse = yield call(cardsService.getCities);
    const passionsResponse = yield call(cardsService.getPassions);

    if (citiesResponse.status === 200 && passionsResponse.status === 200) {
        yield put(GET_CITIES_DATA.COMPLETED(citiesResponse.data));
        yield put(GET_PASSIONS_DATA.COMPLETED(passionsResponse.data));
    }

    const token = yield call(tokenRepository.getAuthTokenFromStorage);

    if (token) {
        yield call(coreAPIClient.setToken, token);
        const response = yield call(profileService.getUserInfo);

        if (response.status == 200) {
            yield put(GET_USER_INFO(response.data));
            yield put(AUTHENTICATE.LOGIN());
        } else {
            yield call(coreAPIClient.clearAuthorizationHeaders);
            const refreshToken = yield call(tokenRepository.getRefreshTokenFromStorage);

            const response = yield call(loginService.refreshTokens, refreshToken);

            if (response.status == 200) {
                yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken);
                yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken);
                yield call(coreAPIClient.setToken, response.data.authorizationToken);

                const userResponse = yield call(profileService.getUserInfo);

                if (userResponse.status == 200) {
                    yield put(GET_USER_INFO(userResponse.data));
                    yield put(AUTHENTICATE.LOGIN());
                }
            }
        }
    }

    setTimeout(splashscreen.hide, 500);
}
