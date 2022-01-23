import { Q } from '@nozbe/watermelondb';
import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';

import { logger } from '../../../core/util/logger.util';
import { chatService } from '../data/api/impl/chat-service-impl.api';
import { Chat } from '../data/database/model/chat.model';
import { User } from '../data/database/model/user.model';
import { database } from '../data/database/watermelon.database';
import { GET_MESSAGES } from '../data/store/chat.actions';
import { messageFactory } from '../util/factories.utils';

export function* getMessagesSaga(action: ReturnType<typeof GET_MESSAGES>): SagaIterator {
    const messagesResponse = yield call(chatService.getMessages, action.payload);

    if (messagesResponse.status === 200) {
        const chat: Chat = yield call(database.getByQuery, Chat.table, [Q.where('chat_id', action.payload)]);

        database
            .withDatabaseSession(async () => {
                const firstUser = (await chat.firstUser.fetch()) as User;
                const secondUser = (await chat.secondUser.fetch()) as User;

                for (const message of messagesResponse.data) {
                    await messageFactory(message, firstUser, secondUser, chat);
                }
            })
            .catch(logger.error);
    }
}

export function* watchGetMessagesSaga(): SagaIterator {
    yield takeLatest(GET_MESSAGES, getMessagesSaga);
}
