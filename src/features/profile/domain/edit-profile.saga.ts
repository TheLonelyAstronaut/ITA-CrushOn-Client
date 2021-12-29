import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiService } from "../../../app/data/api/server";
import { SET_BIO } from "../data/store/edit-profile.actions";

function* setBioSaga(action: ReturnType<typeof SET_BIO.TRIGGER>): SagaIterator {
    //yield put(SET_BIO.STARTED);
    yield call(apiService.setBio, action.payload);
    yield put(SET_BIO.COMPLETED(action.payload));
}

export function* watchSetBioSaga(): SagaIterator {
    yield takeLatest(SET_BIO.TRIGGER, setBioSaga);
}