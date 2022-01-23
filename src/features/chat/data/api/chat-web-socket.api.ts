export type WebSocketMessage = {
    data: string;
};

export type Listener = (data: WebSocketMessage) => void;
export type Unsub = () => void;

export type ChatWebSocket = {
    addEventListener: (callback: Listener) => Unsub;
    connect: (token: string) => void;
    disconnect: () => void;
};
