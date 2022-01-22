import { SagaIterator } from 'redux-saga';
import { spawn, call } from 'redux-saga/effects';

import { watchCardsSaga, watchReactionSaga } from '../../features/cards/domain/cards.saga';
import { watchGetChatsSaga } from '../../features/chat/domain/chat.sagas';
import { watchForGetMatchesSaga } from '../../features/discover/domian/discover.sagas';
import { watchLoginSaga } from '../../features/login/domain/login.saga';
import { watchSetPhotoSaga, watchSetUserInfoSaga } from '../../features/profile/domain/edit-profile.saga';
import {
    watchSetPhotoRegistrationSaga,
    watchRegistrationSaga,
} from '../../features/registration/domain/registration.saga';
import { watchClearTokenSaga } from '../../features/settings/domain/settings.saga';

import { initializationSaga } from './initialization.saga';

export default function* rootSaga(): SagaIterator {
    yield spawn(watchLoginSaga);
    yield spawn(watchRegistrationSaga);
    yield spawn(watchSetPhotoRegistrationSaga);
    yield spawn(watchClearTokenSaga);
    yield spawn(watchSetUserInfoSaga);
    yield spawn(watchSetPhotoSaga);
    yield spawn(watchCardsSaga);
    yield spawn(watchReactionSaga);
    yield spawn(watchForGetMatchesSaga);
    yield spawn(watchGetChatsSaga);

    yield call(initializationSaga);
}
