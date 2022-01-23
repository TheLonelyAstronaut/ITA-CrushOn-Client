import { SagaIterator } from 'redux-saga';
import { spawn, call } from 'redux-saga/effects';

import { watchCardsSaga, watchReactionSaga } from '../../features/cards/domain/cards.saga';
import { watchGetChatsSaga } from '../../features/chat/domain/get-chats.sagas';
import { watchGetMessagesSaga } from '../../features/chat/domain/get-messages.sagas';
import { watchProfileFromChatSaga } from '../../features/chat/domain/open-profile.sagas';
import { bootstrapWebSocket } from '../../features/chat/domain/receive-message.sagas';
import { watchSendMessageSaga } from '../../features/chat/domain/send-message.sagas';
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
    yield spawn(watchGetMessagesSaga);
    yield spawn(watchProfileFromChatSaga);
    yield spawn(watchSendMessageSaga);
    yield spawn(bootstrapWebSocket);

    yield call(initializationSaga);
}
