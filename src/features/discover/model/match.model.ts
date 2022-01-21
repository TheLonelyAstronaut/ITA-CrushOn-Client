import { User } from '../../../core/model/user.model';

export type Match = {
    id: number;
    first: User;
    second: User;
};
