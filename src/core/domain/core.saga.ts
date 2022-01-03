import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { profileAPIClient } from "../../features/profile/data/api/profile.api";
import { coreAPIClient } from "../data/api/core.api";
import { GET_USER } from "../data/store/user/user.actions";
import { tokenRepository } from "../util/token-repository.util";

export function* initializationSaga (): SagaIterator {
    const token = yield call(tokenRepository.getTokenFromStorage);
    
    if(token) {
        yield call(coreAPIClient.setToken, token);
        const userData = yield call(profileAPIClient.getUserInfo);
        yield put(GET_USER.COMPLETED(userData));
    }
}