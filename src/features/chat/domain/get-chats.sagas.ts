import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { logger } from '../../../core/util/logger.util';
import { chatService } from '../data/api/impl/chat-service-impl.api';
import { database } from '../data/database/watermelon.database';
import { GET_CHATS, SET_IS_LOADING } from '../data/store/chat.actions';
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
                    if (message.id > 0) {
                        await messageFactory(message, firstUser, secondUser, chat);
                    }
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
