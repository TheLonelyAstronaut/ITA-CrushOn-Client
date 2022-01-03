import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { CLEAR_TOKEN } from "../../../core/data/store/user/user.actions";
import { tokenRepository } from '../../../core/util/token-repository.util';

function* clearTokenSaga(): SagaIterator {
    //yield put(GET_TOKEN.STARTED);
    yield call(tokenRepository.clearToken);
    yield put(CLEAR_TOKEN.COMPLETED());
}

export function* watchClearTokenSaga(): SagaIterator {
    yield takeLatest(CLEAR_TOKEN.TRIGGER, clearTokenSaga);
}