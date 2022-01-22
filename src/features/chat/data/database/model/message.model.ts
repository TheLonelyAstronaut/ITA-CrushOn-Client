import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation, text } from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';

import { Chat } from './chat.model';
import { User } from './user.model';

export class Message extends Model {
    static table = 'messages';

    static associations: Associations = {
        chats: { type: 'belongs_to', key: 'chat_id' },
    };

    @field('message_id')
    public messageId: number;

    @relation(User.table, 'sender_id')
    public sender: Relation<User>;

    @text('text')
    public text: string;

    @field('sent_at')
    public sentAt: number;

    @relation('chats', 'chat_id')
    public chat: Relation<Chat>;
}
