import { User } from '../../../core/model/user.model';

export type Chat = {
    firstUser: User;
    secondUser: User;
    messages: Message[];
    id: number;
};

export type Message = {
    sender: User;
    text: string;
    timestamp: number;
    id: number;
};

export type SendMessageData = {
    chatId: number;
    message: string;
};
