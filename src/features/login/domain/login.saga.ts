import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiService } from "../../../app/data/api/server";
import { GET_TOKEN, GET_USER } from "../../../core/data/store/user/user.actions";

function* getTokenSaga(action: ReturnType<typeof GET_TOKEN.TRIGGER>): SagaIterator {
    //yield put(GET_TOKEN.STARTED);
        const token = yield call(apiService.getToken, action.payload);
        yield put(GET_TOKEN.COMPLETED(token));
        yield put(GET_USER.TRIGGER(token));
}

export function* watchGetTokenSaga(): SagaIterator {
    yield takeLatest(GET_TOKEN.TRIGGER, getTokenSaga);
}

function* getUserSaga(action: ReturnType<typeof GET_USER.TRIGGER>): SagaIterator {
    //yield put(GET_USER.STARTED);
        const user = yield call(apiService.getUserInfo, action.payload);
        yield put(GET_USER.COMPLETED(user));
}

export function* watchGetUserSaga(): SagaIterator {
    yield takeLatest(GET_USER.TRIGGER, getUserSaga);
}
