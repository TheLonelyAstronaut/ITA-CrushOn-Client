import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from '../../../core/data/store/user/user.actions';
import { notificationService } from '../../../core/util/notification-service.utils';
import { tokenRepository } from '../../../core/util/token-repository.util';
import { GET_CARDS } from '../../cards/data/store/cards.actions';
import { GET_MATCHES } from '../../discover/data/store/discover.actions';
import { loginService } from '../../login/data/api/impl/login-service-impl.api';

function* logoutSaga(): SagaIterator {
    yield call(loginService.logout, yield call(notificationService.getNotificationToken));
    yield call(coreAPIClient.clearAuthorizationHeaders);
    yield call(tokenRepository.clearTokens);
    yield put(AUTHENTICATE.LOGOUT.COMPLETED());
    yield put(GET_CARDS.RESET([]));
    yield put(GET_MATCHES.COMPLETED([]));
}

export function* watchClearTokenSaga(): SagaIterator {
    yield takeLatest(AUTHENTICATE.LOGOUT.TRIGGER, logoutSaga);
}
