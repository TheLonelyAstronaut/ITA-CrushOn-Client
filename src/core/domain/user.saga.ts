import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { profileService } from '../../features/profile/data/api/impl/profile-service-impl.api';
import { GET_USER_INFO } from '../data/store/user/user.actions';

export function* getUserSaga(): SagaIterator {
    const user = yield call(profileService.getUserInfo);
    // CHECK IF DATA REALLY EXISTS
    if (user.data) {
        yield put(GET_USER_INFO(user.data));
    } else {
        console.log('wrong userInfo');
    }
}
