import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from "../../../core/data/store/user/user.actions";
import { getUserSaga } from '../../../core/domain/user.saga';
import { AuthTokens } from '../../../core/model/auth.model';
import { tokenRepository } from '../../../core/util/token-repository.util';
import { loginService } from '../data/api/impl/login-service-impl.api';
import { LOGIN } from '../data/store/login.actions';


function* loginSaga(action: ReturnType<typeof LOGIN.TRIGGER>): SagaIterator {

    const response: AxiosResponse<AuthTokens> = yield call(loginService.login, action.payload.username, action.payload.password);

    if (response.data) {
        yield call(coreAPIClient.setToken, response.data.authorizationToken);
        yield call(tokenRepository.saveAuthTokenToStorage, response.data.authorizationToken);
        yield call(tokenRepository.saveRefreshTokenToStorage, response.data.refreshToken);

        yield call(getUserSaga);
        yield put(AUTHENTICATE.LOGIN());
    } else {
        console.log(response.status, response.statusText);
    }
}

export function* watchLoginSaga(): SagaIterator {
    yield takeLatest(LOGIN.TRIGGER, loginSaga);
}
