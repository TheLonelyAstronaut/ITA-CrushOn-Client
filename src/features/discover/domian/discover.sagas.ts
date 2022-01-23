import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { getUser } from '../../../core/data/store/user/user.selectors';
import { User } from '../../../core/model/user.model';
import { EVENTS_LIST } from '../../../core/util/analytics.util';
import { logger } from '../../../core/util/logger.util';
import { discoverService } from '../data/api/impl/discover-service-impl.api';
import { GET_MATCHES } from '../data/store/discover.actions';
import { Match } from '../model/match.model';

export function* getMatchesSaga(): SagaIterator {
    yield put(GET_MATCHES.STARTED());

    const matches = yield call(discoverService.getMatches);
    const user: User = yield select(getUser);

    if (matches.status === 200) {
        const users = matches.data.map((match: Match) => (match.first.id === user?.id ? match.second : match.first));

        yield put(GET_MATCHES.COMPLETED(users));
        yield call(logger.log, EVENTS_LIST.GET_MATCHES, { username: user.username });
    } else {
        yield put(GET_MATCHES.COMPLETED([]));
    }
}

export function* watchForGetMatchesSaga(): SagaIterator {
    yield takeLatest(GET_MATCHES.TRIGGER, getMatchesSaga);
}
