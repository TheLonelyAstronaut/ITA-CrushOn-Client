import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { profileService } from '../../features/profile/data/api/impl/profile-service-impl.api';
import { GET_USER_INFO } from '../data/store/user/user.actions';
import { logger } from '../util/logger.util';

export function* getUserSaga(): SagaIterator {
    const user = yield call(profileService.getUserInfo);

    if (user.status === 200) {
        yield put(GET_USER_INFO(user.data));
    } else {
        logger.log('wrong userInfo');
    }
}
