import { SagaIterator } from 'redux-saga';
import { spawn, call } from 'redux-saga/effects';

import { watchLoginSaga } from "../../features/login/domain/login.saga";
import { watchSetPhotoSaga, watchSetUserInfoSaga } from '../../features/profile/domain/edit-profile.saga';
import { watchClearTokenSaga } from '../../features/profile/domain/settings.saga';
import { watchSetPhotoRegistrationSaga, watchRegistrationSaga } from '../../features/registration/domain/registration.saga';

import { initializationSaga } from './initialization.saga';

export default function* rootSaga(): SagaIterator {
    yield spawn(watchLoginSaga);
    yield spawn(watchRegistrationSaga);
    yield spawn(watchSetPhotoRegistrationSaga);
    yield spawn(watchClearTokenSaga);
    yield spawn(watchSetUserInfoSaga);
    yield spawn(watchSetPhotoSaga);

    yield call(initializationSaga);
}