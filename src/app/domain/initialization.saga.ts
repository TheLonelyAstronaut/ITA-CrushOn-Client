import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { coreAPIClient } from '../../core/data/api/core.api';
import { GET_CITIES_DATA, GET_PASSIONS_DATA } from '../../core/data/store/remote-config/remote-config.actions';
import { AUTHENTICATE, GET_USER_INFO } from '../../core/data/store/user/user.actions';
import { splashscreen } from '../../core/util/splashscreen.util';
import { tokenRepository } from '../../core/util/token-repository.util';
import { cardsService } from '../../features/cards/data/api/impl/cards-service-impl.api';
import { chatWebSocket } from '../../features/chat/data/api/impl/chat-web-socket-impl.api';
import { loginService } from '../../features/login/data/api/impl/login-service-impl.api';
import { profileService } from '../../features/profile/data/api/impl/profile-service-impl.api';

export function* initializationSaga(): SagaIterator {
    console.log('-----------init Saga started----------');
    yield call(coreAPIClient.configure);
    console.log('----------configured----------');

    const citiesResponse = yield call(cardsService.getCities);
    const passionsResponse = yield call(cardsService.getPassions);

    console.log('----------got cities and passions----------');

    if (citiesResponse.status === 200 && passionsResponse.status === 200) {
        yield put(GET_CITIES_DATA.COMPLETED(citiesResponse.data));
        yield put(GET_PASSIONS_DATA.COMPLETED(passionsResponse.data));
    }

    const token = yield call(tokenRepository.getAuthTokenFromStorage);

    if (token) {
        yield call(coreAPIClient.setToken, token);
        const response = yield call(profileService.getUserInfo);
        console.log('----------set token and ask user----------');
        if (response.status == 200) {
            yield call(chatWebSocket.connect, token);
            console.log('----------got user----------');

            yield put(GET_USER_INFO(response.data));
            yield put(AUTHENTICATE.LOGIN());
        } else {
            yield call(coreAPIClient.clearAuthorizationHeaders);
            console.log('----------error got user (bad auth token?)----------');

            const refreshToken = yield call(tokenRepository.getRefreshTokenFromStorage);

            const response = yield call(loginService.refreshTokens, refreshToken);
            console.log('----------sent refreshtoken----------');

            if (response.status == 200) {
                console.log('----------got new tokens!----------');
                yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken);
                yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken);
                yield call(coreAPIClient.setToken, response.data.authorizationToken);

                const userResponse = yield call(profileService.getUserInfo);
                console.log('----------ask for user info again----------');

                if (userResponse.status == 200) {
                    console.log('----------got user info----------');
                    yield call(chatWebSocket.connect, token);

                    yield put(GET_USER_INFO(userResponse.data));
                    yield put(AUTHENTICATE.LOGIN());
                }
            }
        }
    }

    setTimeout(splashscreen.hide, 500);
}
