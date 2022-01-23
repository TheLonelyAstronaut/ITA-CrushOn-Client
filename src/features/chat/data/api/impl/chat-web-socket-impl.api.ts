import { SERVER_ENDPOINT } from '../../../../../core/data/api/core.api';
import { logger } from '../../../../../core/util/logger.util';
import { ChatWebSocket, Listener, Unsub } from '../chat-web-socket.api';

export class ChatWebSocketImpl implements ChatWebSocket {
    private listeners: Array<Listener> = [];
    private ws: WebSocket;

    addEventListener = (callback: Listener): Unsub => {
        this.listeners.push(callback);

        return () => this.listeners.splice(this.listeners.indexOf(callback), 0);
    };

    connect = (token: string): void => {
        try {
            this.ws = new WebSocket(`ws://${SERVER_ENDPOINT}/api/v1/ws/chat?token=${token}`);

            this.ws.addEventListener('message', (data) => {
                this.listeners.forEach((listener) => listener(data));
            });

            this.ws.addEventListener('error', (error) => {
                logger.log(error);
                this.disconnect();
            });

            this.ws.addEventListener('open', () => {
                logger.log('Socket opened');
            });
        } catch (e) {
            logger.error(e);
        }
    };

    disconnect = (): void => {
        this.ws.close();
    };
}

export const chatWebSocket = new ChatWebSocketImpl();
