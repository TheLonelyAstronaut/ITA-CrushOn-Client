import { AxiosResponse } from 'axios';

import { Chat, Message, SendMessageData } from '../../model/chat.model';

export interface ChatService {
    getChats: () => Promise<AxiosResponse<Chat[]>>;
    getMessages: (chatId: number) => Promise<AxiosResponse<Message[]>>;
    sendMessage: (data: SendMessageData) => Promise<AxiosResponse<{ timestamp: number; id: number }>>;
}
