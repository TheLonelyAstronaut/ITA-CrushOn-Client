import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { tokenAPIClient } from '../../../core/data/api/token.api';
import { GET_TOKEN, GET_USER } from "../../../core/data/store/user/user.actions";
import { tokenRepository } from '../../../core/util/token-repository.util';
import { profileAPIClient } from '../../profile/data/api/profile.api';

function* getTokenSaga(action: ReturnType<typeof GET_TOKEN.TRIGGER>): SagaIterator {
    //yield put(GET_TOKEN.STARTED);
        const token: string = yield call(tokenAPIClient.getToken, action.payload);
        if (token !== '') {
            console.log(`token is ${token}`);
            yield call(tokenRepository.saveTokenToStorage, action.payload.login, token);
            yield put(GET_TOKEN.COMPLETED(token));
            yield put(GET_USER.TRIGGER());
        } else {
            console.log(`token is '', wrong auth data?`);
        }
}

export function* watchGetTokenSaga(): SagaIterator {
    yield takeLatest(GET_TOKEN.TRIGGER, getTokenSaga);
}

function* getUserSaga(): SagaIterator {
    //yield put(GET_USER.STARTED);
        const user = yield call(profileAPIClient.getUserInfo);
        yield put(GET_USER.COMPLETED(user));
}

export function* watchGetUserSaga(): SagaIterator {
    yield takeLatest(GET_USER.TRIGGER, getUserSaga);
}
