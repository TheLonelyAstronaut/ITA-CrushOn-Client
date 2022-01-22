import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class User extends Model {
    static table = 'users';

    @field('user_id')
    userId: number;

    @field('photo')
    photo: string;

    @field('name')
    name: string;
}
