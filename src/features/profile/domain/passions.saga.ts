import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { apiService } from "../../../app/data/api/server";
import { SET_PASSIONS } from '../data/store/passions.actions';

function* setPassionsSaga(action: ReturnType<typeof SET_PASSIONS.TRIGGER>): SagaIterator {
    //yield put(SET_PASSIONS.STARTED);
    yield call(apiService.setPassions, action.payload);
    yield put(SET_PASSIONS.COMPLETED(action.payload));
}

export function* watchSetPassionsSaga(): SagaIterator {
    yield takeLatest(SET_PASSIONS.TRIGGER, setPassionsSaga);
}