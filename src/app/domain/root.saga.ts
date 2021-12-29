import { SagaIterator } from 'redux-saga';
import { spawn, call } from 'redux-saga/effects';

import { coreAPIClient } from '../../core/data/api/core.api';
import { watchGetTokenSaga, watchGetUserSaga } from "../../features/login/domain/login.saga";
import { profileAPIClient } from '../../features/profile/data/api/profile.api';
import { watchSetBioSaga } from '../../features/profile/domain/edit-profile.saga';
import { watchSetPassionsSaga } from '../../features/profile/domain/passions.saga';
import { watchClearTokenSaga } from '../../features/profile/domain/settings.saga';

export default function* rootSaga(): SagaIterator {
    yield spawn(watchGetTokenSaga);
    yield spawn(watchClearTokenSaga);
    yield spawn(watchGetUserSaga);
    yield spawn(watchSetPassionsSaga);
    yield spawn(watchSetBioSaga);

    //yield call(initializationSaga)
}

// initializationSaga () {
//     const token = yield call(tokenService.getTokenFromStorage);
    
//     if(token) {
//         yield call(coreAPIClient.setToken, token);
//         const userData = yield call(profileAPIClient.getUserInfo);
//         yield put(SET_USER_DATA.COMPLETED(userData));
//     }
// }