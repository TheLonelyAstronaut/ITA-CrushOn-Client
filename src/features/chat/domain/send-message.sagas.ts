import { Q } from '@nozbe/watermelondb';
import { SagaIterator } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';

import { getUser } from '../../../core/data/store/user/user.selectors';
import { chatService } from '../data/api/impl/chat-service-impl.api';
import { Chat } from '../data/database/model/chat.model';
import { Message } from '../data/database/model/message.model';
import { database } from '../data/database/watermelon.database';
import { SEND_MESSAGE } from '../data/store/chat.actions';
import { messageFactory } from '../util/factories.utils';

export function* sendMessageSaga(action: ReturnType<typeof SEND_MESSAGE>): SagaIterator {
    const chat = yield call(database.getByQuery, Chat.table, [Q.where('chat_id', action.payload.chatId)]);
    const currentUser = yield select(getUser);

    const message: Message = yield call(database.withDatabaseSession, async () => {
        const firstUser = await chat.firstUser.fetch();
        const secondUser = await chat.secondUser.fetch();

        return messageFactory(
            {
                sender: currentUser,
                id: Date.now(),
                text: action.payload.message,
                timestamp: Date.now(),
                chatId: action.payload.chatId,
            },
            firstUser,
            secondUser,
            chat
        );
    });

    const messageResponse = yield call(chatService.sendMessage, action.payload);

    if (messageResponse.status == 200) {
        yield call(database.withDatabaseSession, async () => {
            await message.update((msg) => {
                msg.messageId = messageResponse.data.id;
                msg.sentAt = messageResponse.data.timestamp;
            });
        });
    }
}

export function* watchSendMessageSaga(): SagaIterator {
    yield takeEvery(SEND_MESSAGE, sendMessageSaga);
}
