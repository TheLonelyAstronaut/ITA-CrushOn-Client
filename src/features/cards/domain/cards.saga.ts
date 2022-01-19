import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { Reaction, SetReactionResponse } from "../../../core/model/explore.model";
import { User } from "../../../core/model/user.model";
import { cardsService } from "../data/api/impl/cards-service-impl.api";
import { GET_CARDS, SET_REACTION } from "../data/store/cards.actions";
import { getCards } from "../data/store/cards.selectors";

function* cardsSaga(): SagaIterator {
    const cardsResponse: AxiosResponse<User[]> = yield call(cardsService.getCards);
    if (cardsResponse.status === 200) {
        yield put(GET_CARDS.COMPLETED(cardsResponse.data));
    } else {
        alert(cardsResponse.statusText);
    }
}
export function* watchCardsSaga(): SagaIterator {
    yield takeLatest(GET_CARDS.STARTED, cardsSaga);
}

function* reactionSaga(action: ReturnType<typeof SET_REACTION.STARTED>): SagaIterator {
    const setReactionResponse: AxiosResponse<SetReactionResponse> = yield call(cardsService.setReaction, {
        userId: action.payload.userId,
        reaction: action.payload.reaction === Reaction.LIKE ? 'like' : 'dislike',
    });
    if (setReactionResponse.status === 200) {
        if (setReactionResponse.data.isMatch === true) {
            //navigate to match screen with user prop
            alert(`match with ${setReactionResponse.data.target.name}`);
        }
    } else {
        alert(setReactionResponse.statusText);
    }
    const cards: User[] = yield select(getCards);
    if (cards.length <= 5) yield call (cardsSaga);
}
export function* watchReactionSaga(): SagaIterator {
    yield takeLatest(SET_REACTION.STARTED, reactionSaga);
}