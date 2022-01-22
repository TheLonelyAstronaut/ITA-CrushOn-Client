import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { logger } from '../../../core/util/logger.util';
import { navigationService } from '../../../core/util/navigation-container.util';
import { profileService } from '../../profile/data/api/impl/profile-service-impl.api';
import { chatService } from '../data/api/impl/chat-service-impl.api';
import { database } from '../data/database/watermelon.database';
import {
    GET_CHATS,
    GET_MESSAGES,
    OPEN_PROFILE_FROM_CHAT,
    SEND_MESSAGE,
    SET_IS_LOADING,
} from '../data/store/chat.actions';
import { Chat as ServerChat } from '../model/chat.model';
import { chatFactory, messageFactory, userFactory } from '../util/factories.utils';

export function* getChatsSaga(): SagaIterator {
    yield put(SET_IS_LOADING(true));

    const chatsResponse: AxiosResponse<ServerChat[]> = yield call(chatService.getChats);

    if (chatsResponse.status == 200) {
        if (!chatsResponse.data.length) {
            yield call(database.clearDatabase);
        } else {
            const toClientChatTransformer = async (serverChat: ServerChat): Promise<void> => {
                const firstUser = await userFactory(serverChat, 'firstUser');
                const secondUser = await userFactory(serverChat, 'secondUser');
                const chat = await chatFactory(serverChat, firstUser, secondUser);

                for (const message of serverChat.messages) {
                    await messageFactory(message, firstUser, secondUser, chat);
                }
            };

            database
                .withDatabaseSession(async () => {
                    for (const chat of chatsResponse.data) {
                        await toClientChatTransformer(chat);
                    }
                })
                .catch(logger.error);
        }
    }

    yield put(SET_IS_LOADING(false));
}

export function* watchGetChatsSaga(): SagaIterator {
    yield takeLatest(GET_CHATS, getChatsSaga);
}

export function* getMessagesSaga(action: ReturnType<typeof GET_MESSAGES>): SagaIterator {
    const messagesResponse = yield call(chatService.getMessages, action.payload);

    if (messagesResponse.status === 200) {
        console.log(messagesResponse.data);
    }
}

export function* watchGetMessagesSaga(): SagaIterator {
    yield takeLatest(GET_MESSAGES, getMessagesSaga);
}

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

export function* sendMessageSaga(action: ReturnType<typeof SEND_MESSAGE>): SagaIterator {
    yield call(logger.log, action.payload);
}

export function* watchSendMessageSaga(): SagaIterator {
    yield takeEvery(SEND_MESSAGE, sendMessageSaga);
}
