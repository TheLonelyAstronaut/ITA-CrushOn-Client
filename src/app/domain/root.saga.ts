import { SagaIterator } from 'redux-saga';
import { spawn, call } from 'redux-saga/effects';

import { initializationSaga } from '../../core/domain/core.saga';
import { watchGetTokenSaga, watchGetUserSaga } from "../../features/login/domain/login.saga";
import { watchSetBioSaga } from '../../features/profile/domain/edit-profile.saga';
import { watchSetPassionsSaga } from '../../features/profile/domain/passions.saga';
import { watchClearTokenSaga } from '../../features/profile/domain/settings.saga';

export default function* rootSaga(): SagaIterator {
    yield spawn(watchGetTokenSaga);
    yield spawn(watchClearTokenSaga);
    yield spawn(watchGetUserSaga);
    yield spawn(watchSetPassionsSaga);
    yield spawn(watchSetBioSaga);

    yield call(initializationSaga);
}