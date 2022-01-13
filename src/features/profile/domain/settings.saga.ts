import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from "../../../core/data/store/user/user.actions";
import { tokenRepository } from '../../../core/util/token-repository.util';

function* clearTokensSaga(): SagaIterator {
    yield call(coreAPIClient.clearAuthorizationHeaders);
    yield call(tokenRepository.clearTokens);
    yield put(AUTHENTICATE.LOGOUT.COMPLETED());
}

export function* watchClearTokenSaga(): SagaIterator {
    yield takeLatest(AUTHENTICATE.LOGOUT.TRIGGER, clearTokensSaga);
}