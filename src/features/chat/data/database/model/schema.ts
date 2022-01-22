import { appSchema, tableSchema } from '@nozbe/watermelondb';

import { Chat } from './chat.model';
import { Message } from './message.model';
import { User } from './user.model';

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: Chat.table,
            columns: [
                { name: 'first_user_id', type: 'string', isIndexed: true },
                { name: 'second_user_id', type: 'string', isIndexed: true },
                { name: 'chat_id', type: 'number' },
            ],
        }),
        tableSchema({
            name: Message.table,
            columns: [
                { name: 'sender_id', type: 'string', isIndexed: true },
                { name: 'text', type: 'string' },
                { name: 'sent_at', type: 'number' },
                { name: 'message_id', type: 'number' },
                { name: 'chat_id', type: 'string', isIndexed: true },
            ],
        }),
        tableSchema({
            name: User.table,
            columns: [
                { name: 'user_id', type: 'number' },
                { name: 'photo', type: 'string' },
                { name: 'name', type: 'string' },
            ],
        }),
    ],
});
