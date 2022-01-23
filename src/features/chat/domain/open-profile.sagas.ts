import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';

import { navigationService } from '../../../core/util/navigation-container.util';
import { profileService } from '../../profile/data/api/impl/profile-service-impl.api';
import { OPEN_PROFILE_FROM_CHAT } from '../data/store/chat.actions';

export function* openProfileFromChatSaga(action: ReturnType<typeof OPEN_PROFILE_FROM_CHAT>): SagaIterator {
    const userResponse = yield call(profileService.getUserInfo, action.payload);

    if (userResponse.status === 200) {
        navigationService.navigate('ExpandedCard', {
            user: userResponse.data,
        });
    }
}

export function* watchProfileFromChatSaga(): SagaIterator {
    yield takeLatest(OPEN_PROFILE_FROM_CHAT, openProfileFromChatSaga);
}
