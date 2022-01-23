import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { coreAPIClient } from '../../../core/data/api/core.api';
import { AUTHENTICATE } from '../../../core/data/store/user/user.actions';
import { getUser } from '../../../core/data/store/user/user.selectors';
import { EVENTS_LIST } from '../../../core/util/analytics.util';
import { logger } from '../../../core/util/logger.util';
import { notificationService } from '../../../core/util/notification-service.utils';
import { tokenRepository } from '../../../core/util/token-repository.util';
import { GET_CARDS } from '../../cards/data/store/cards.actions';
import { chatWebSocket } from '../../chat/data/api/impl/chat-web-socket-impl.api';
import { database } from '../../chat/data/database/watermelon.database';
import { GET_MATCHES } from '../../discover/data/store/discover.actions';
import { loginService } from '../../login/data/api/impl/login-service-impl.api';

function* logoutSaga(): SagaIterator {
    yield call(loginService.logout, yield call(notificationService.getNotificationToken));
    yield call(coreAPIClient.clearAuthorizationHeaders);
    yield call(tokenRepository.clearTokens);
    yield call(database.clearDatabase);
    yield call(chatWebSocket.disconnect);

    const user = yield select(getUser);
    yield call(logger.log, EVENTS_LIST.LOGOUT, { username: user.username });

    yield put(AUTHENTICATE.LOGOUT.COMPLETED());
    yield put(GET_CARDS.RESET([]));
    yield put(GET_MATCHES.COMPLETED([]));
}

export function* watchClearTokenSaga(): SagaIterator {
    yield takeLatest(AUTHENTICATE.LOGOUT.TRIGGER, logoutSaga);
}
