import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiService } from "../../../app/data/api/server";
import { CLEAR_TOKEN } from "../../../core/data/store/user/user.actions";

function* clearTokenSaga(action: ReturnType<typeof CLEAR_TOKEN.TRIGGER>): SagaIterator {
    //yield put(GET_TOKEN.STARTED);
    yield call(apiService.clearToken, action.payload);
    yield put(CLEAR_TOKEN.COMPLETED());
}

export function* watchClearTokenSaga(): SagaIterator {
    yield takeLatest(CLEAR_TOKEN.TRIGGER, clearTokenSaga);
}