import { AxiosResponse } from 'axios';

import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { Chat, Message, SendMessageData } from '../../../model/chat.model';
import { ChatService } from '../chat-service.api';

class ChatServiceImpl implements ChatService {
    constructor(private core: CoreAPIClient) {}

    getChats = async (): Promise<AxiosResponse<Chat[]>> => {
        return this.core.get('api/v1/chats');
    };

    getMessages = async (chatId: number): Promise<AxiosResponse<Message[]>> => {
        return this.core.get(`api/v1/chats/${chatId}`);
    };

    sendMessage = async (data: SendMessageData): Promise<AxiosResponse<number>> => {
        return this.core.post('api/v1/chats/send', data);
    };
}

export const chatService: ChatService = new ChatServiceImpl(coreAPIClient);
