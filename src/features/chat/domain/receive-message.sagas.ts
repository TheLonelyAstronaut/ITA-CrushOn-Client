import { Q } from '@nozbe/watermelondb';
import { eventChannel, EventChannel, SagaIterator, Subscribe } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import { logger } from '../../../core/util/logger.util';
import { WebSocketMessage } from '../data/api/chat-web-socket.api';
import { chatWebSocket } from '../data/api/impl/chat-web-socket-impl.api';
import { Chat } from '../data/database/model/chat.model';
import { User } from '../data/database/model/user.model';
import { database } from '../data/database/watermelon.database';
import { Message as ServerMessage } from '../model/chat.model';
import { messageFactory } from '../util/factories.utils';

export const webSocketSubscribe: Subscribe<WebSocketMessage> = (emitter) => chatWebSocket.addEventListener(emitter);

export const createWebSocketMessagesReceiver = (): EventChannel<WebSocketMessage> =>
    eventChannel<WebSocketMessage>(webSocketSubscribe);

export function* receiveMessage(action: WebSocketMessage): SagaIterator {
    const message: ServerMessage = yield call(JSON.parse, action.data);

    database
        .withDatabaseSession(async () => {
            const chat = await database.getByQuery<Chat>(Chat.table, [Q.where('chat_id', message.chatId)]);
            const firstUser = (await chat.firstUser.fetch()) as User;
            const secondUser = (await chat.secondUser.fetch()) as User;

            await messageFactory(message, firstUser, secondUser, chat);
        })
        .catch(logger.error);
}

export function* bootstrapWebSocket(): SagaIterator {
    const webSocketEventChannel = yield call(createWebSocketMessagesReceiver);

    yield takeEvery(webSocketEventChannel, receiveMessage);
}
