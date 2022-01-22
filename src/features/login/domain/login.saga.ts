import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from '../../../core/data/store/user/user.actions';
import { getUserSaga } from '../../../core/domain/user.saga';
import { AuthTokens } from '../../../core/model/auth.model';
import { notificationService } from '../../../core/util/notification-service.utils';
import { tokenRepository } from '../../../core/util/token-repository.util';
import { profileService } from '../../profile/data/api/impl/profile-service-impl.api';
import { loginService } from '../data/api/impl/login-service-impl.api';
import { LOGIN } from '../data/store/login.actions';

function* loginSaga(action: ReturnType<typeof LOGIN.TRIGGER>): SagaIterator {
    yield call(coreAPIClient.clearAuthorizationHeaders);

    const response: AxiosResponse<AuthTokens> = yield call(
        loginService.login,
        action.payload.username,
        action.payload.password
    );

    if (response.status === 200) {
        yield call(coreAPIClient.setToken, response.data.authorizationToken);
        yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken);
        yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken);
        yield call(profileService.setFirebaseToken, yield call(notificationService.getNotificationToken));

        yield call(getUserSaga);
        yield put(AUTHENTICATE.LOGIN());
    } else {
        alert('wrong username or password');
    }
}

export function* watchLoginSaga(): SagaIterator {
    yield takeLatest(LOGIN.TRIGGER, loginSaga);
}
