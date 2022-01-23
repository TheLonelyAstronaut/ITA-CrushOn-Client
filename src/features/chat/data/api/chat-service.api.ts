import { AxiosResponse } from 'axios';
import { HTTPResponse } from '../../../../core/util/http-utils.util';

import { Chat, Message, SendMessageData } from '../../model/chat.model';

export interface ChatService {
    getChats: () => Promise<HTTPResponse<Chat[]>>;
    getMessages: (chatId: number) => Promise<HTTPResponse<Message[]>>;
    sendMessage: (data: SendMessageData) => Promise<HTTPResponse<{ timestamp: number; id: number }>>;
}
