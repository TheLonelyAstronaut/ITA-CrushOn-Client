import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery, takeLatest, all, delay } from 'redux-saga/effects';

import { SetReactionResponse } from '../../../core/model/explore.model';
import { User } from '../../../core/model/user.model';
import { cardsService } from '../data/api/impl/cards-service-impl.api';
import { GET_CARDS, SET_REACTION } from '../data/store/cards.actions';
import { getCards, getIsCardsLoading, getIsEndReached } from '../data/store/cards.selectors';
import { getMatchesSaga } from '../../discover/domian/discover.sagas';

function* cardsSaga(): SagaIterator {
    yield put(GET_CARDS.STARTED());

    const [cardsResponse]: [AxiosResponse<User[]>] = yield all([call(cardsService.getCards), delay(2000)]);

    if (cardsResponse.status === 200) {
        yield put(GET_CARDS.COMPLETED(cardsResponse.data));
    } else {
        console.error(`cardsSaga: ${cardsResponse.status}`);
    }
}

export function* watchCardsSaga(): SagaIterator {
    yield takeLatest(GET_CARDS.TRIGGER, cardsSaga);
}

function* reactionSaga(action: ReturnType<typeof SET_REACTION.STARTED>): SagaIterator {
    yield put(SET_REACTION.COMPLETED());

    const setReactionResponse: AxiosResponse<SetReactionResponse> = yield call(cardsService.setReaction, {
        userId: action.payload.userId,
        reaction: action.payload.reaction,
    });

    if (setReactionResponse.status === 200) {
        if (setReactionResponse.data.isMatch) {
            //navigate to match screen with user prop
            alert(`match with ${setReactionResponse.data.target.name}`);
            yield call(getMatchesSaga);
        }
    } else {
        alert(`reactionSaga: ${setReactionResponse.status}`);
    }

    const cards: User[] = yield select(getCards);
    const isLoading = yield select(getIsCardsLoading);
    const isEndReached = yield select(getIsEndReached);

    if (cards.length <= 5 && !isLoading && !isEndReached) yield call(cardsSaga);
}

export function* watchReactionSaga(): SagaIterator {
    yield takeEvery(SET_REACTION.STARTED, reactionSaga);
}
