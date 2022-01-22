import { Model, Query, Relation } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';
import relation from '@nozbe/watermelondb/decorators/relation';
import { Associations } from '@nozbe/watermelondb/Model';

import { Message } from './message.model';
import { User } from './user.model';

export class Chat extends Model {
    static table = 'chats';

    static associations: Associations = {
        messages: { type: 'has_many', foreignKey: 'chat_id' },
    };

    @field('chat_id')
    chatId: number;

    @relation(User.table, 'first_user_id')
    firstUser: Relation<User>;

    @relation(User.table, 'second_user_id')
    secondUser: Relation<User>;

    @children(Message.table)
    messages: Query<Message>;
}
