import { Q } from "@nozbe/watermelondb";
import { AxiosResponse } from "axios";
import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

import { chatService } from "../data/api/impl/chat-service-impl.api";
import { Chat } from "../data/database/model/chat.model";
import { Message } from "../data/database/model/message.model";
import { User } from "../data/database/model/user.model";
import { database } from "../data/database/watermelon.database";
import { GET_CHATS, SET_IS_LOADING } from "../data/store/chat.actions";
import { Chat as ChatState } from '../model/chat.model'

export function* getChatsSaga(): SagaIterator {
    yield put(SET_IS_LOADING(true));

    const chatsResponse: AxiosResponse<ChatState[]> = yield call(chatService.getChats);

    if(chatsResponse.status == 200) {
        database.withDatabaseSession(async () => {
            chatsResponse.data.forEach( async item => {
                const firstUser = await database.createIfNotExist<User>(User.table, [
                    Q.where('user_id', item.firstUser.id),
                ], (user) => {
                    user.userId = item.firstUser.id;
                    user.photo = item.firstUser.photo.link;
                    user.name = item.firstUser.name;
                });
    
                const secondUser = await database.createIfNotExist<User>(User.table, [
                    Q.where('user_id', item.secondUser.id),
                ], (user) => {
                    user.userId = item.secondUser.id;
                    user.photo = item.secondUser.photo.link;
                    user.name = item.secondUser.name;
                });
    
                const chat = await database.createIfNotExist<Chat>(Chat.table, [
                    Q.where('chat_id', item.id),
                ], (chat) => {
                    chat.firstUser.set(firstUser);
                    chat.secondUser.set(secondUser);
                    chat.chatId = item.id;
                });

                item.messages.forEach(async msg => {
                    await database.createIfNotExist<Message>(Message.table, [
                        Q.where('message_id', msg.id),
                    ], (message) => {
                        message.text = msg.text;
                        message.messageId = msg.id;
                        message.sentAt = msg.timestamp;
                        message.sender.set(msg.sender.id === firstUser.userId ? firstUser : secondUser);
                        message.chat.set(chat);
                    });
                })
            })
        });
        yield put(SET_IS_LOADING(false));
    }
}

export function* watchGetChatsSaga(): SagaIterator {
    yield takeLatest(GET_CHATS, getChatsSaga);
}