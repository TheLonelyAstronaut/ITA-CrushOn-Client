import { Q } from '@nozbe/watermelondb';

import { Chat } from '../data/database/model/chat.model';
import { Message } from '../data/database/model/message.model';
import { User } from '../data/database/model/user.model';
import { database } from '../data/database/watermelon.database';
import { Chat as ServerChat, Message as ServerMessage } from '../model/chat.model';

export const messageFactory = async (
    msg: ServerMessage,
    firstUser: User,
    secondUser: User,
    chat: Chat
): Promise<Message> => {
    return database.createIfNotExist<Message>(Message.table, [Q.where('message_id', msg.id)], (message) => {
        message.text = msg.text;
        message.messageId = msg.id;
        message.sentAt = msg.timestamp;
        message.sender.set(msg.sender.id === firstUser.userId ? firstUser : secondUser);
        message.chat.set(chat);
    });
};

export const userFactory = async (chat: ServerChat, key: 'firstUser' | 'secondUser'): Promise<User> => {
    return database.createIfNotExist<User>(User.table, [Q.where('user_id', chat[key].id)], (user) => {
        user.userId = chat[key].id;
        user.photo = chat[key].photo.link;
        user.name = chat[key].name;
    });
};

export const chatFactory = async (serverChat: ServerChat, firstUser: User, secondUser: User): Promise<Chat> => {
    return database.createIfNotExist<Chat>(Chat.table, [Q.where('chat_id', serverChat.id)], (chat) => {
        chat.firstUser.set(firstUser);
        chat.secondUser.set(secondUser);
        chat.chatId = serverChat.id;
    });
};
