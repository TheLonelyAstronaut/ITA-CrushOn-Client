import { Database, Model, Query } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Clause } from '@nozbe/watermelondb/QueryDescription';

import { Chat } from './model/chat.model';
import { Message } from './model/message.model';
import schema from './model/schema';
import { User } from './model/user.model';

class WatermelonDatabase {
    private database: Database;

    constructor() {
        const adapter = new SQLiteAdapter({
            schema,
            jsi: true,
            onSetUpError: (error) => {
                alert(`${error}/nreload the app`);
            },
        });

        this.database = new Database({
            adapter,
            modelClasses: [Chat, Message, User],
        });
    }

    getAll = async <T extends Model>(tableName: string, queryBy: Clause[]): Promise<T[]> => {
        return this.database
            .get(tableName)
            .query(...queryBy)
            .fetch() as Promise<T[]>;
    };

    getAllWithoutFetch = <T extends Model>(tableName: string, queryBy: Clause[]): Query<T> => {
        return this.database.get(tableName).query(...queryBy) as unknown as Query<T>;
    };

    create = async <T extends Model>(tableName: string, setInitialFields: (data: T) => void): Promise<T> => {
        return this.database.get(tableName).create(setInitialFields as (data: Model) => void) as Promise<T>;
    };

    createIfNotExist = async <T extends Model>(
        tableName: string,
        queryBy: Clause[],
        setInitialFields: (data: T) => void
    ): Promise<T> => {
        const item = (await this.database
            .get(tableName)
            .query(...queryBy)
            .fetch()) as unknown as Array<T>;

        return item.length
            ? item[0]
            : (this.database.get(tableName).create(setInitialFields as (data: Model) => void) as Promise<T>);
    };

    destroy = async (model: Model) => {
        await model.destroyPermanently();
    };

    withDatabaseSession = async <T>(callback: () => Promise<T>): Promise<T | null> => {
        return this.database.write(callback);
    };

    testRelations = async () => {
        this.withDatabaseSession(async () => {
            const firstUser = await this.create<User>(User.table, (user) => {
                user.userId = 1;
                user.photo = 'firstPhoto';
                user.name = 'Astro';
            });

            const secondUser = await this.create<User>(User.table, (user) => {
                user.userId = 2;
                user.photo = 'secondPhoto';
                user.name = 'Polina';
            });

            const chat = await this.create<Chat>(Chat.table, (chat) => {
                chat.firstUser.set(firstUser);
                chat.secondUser.set(secondUser);
                chat.chatId = 12;
            });

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const message = await this.create<Message>(Message.table, (message) => {
                message.text = 'Bruh';
                message.messageId = 1;
                message.sentAt = Date.now();
                message.sender.set(firstUser);
                message.chat.set(chat);
            });

            chat.messages.fetch().then((chats) => alert(chats.length));
        });
    };

    clearDatabase = async () => {
        await this.withDatabaseSession(async () => await this.database.unsafeResetDatabase());
    };

    runTests = async () => {
        await this.clearDatabase();
        await this.testRelations();
    };
}

export const database = new WatermelonDatabase();

//database.runTests();
/*database.create<Message>('messages', msg => {
    msg.senderId = 1;
    msg.text = "Bruh";
    msg.sentAt = Date.now()
    msg.messageId = 1;
}).then(async (data) => {
    const values = await database.getAll<Message>('messages', []);

    values.forEach(message => {
        alert(message.messageId);
    })
});*/
