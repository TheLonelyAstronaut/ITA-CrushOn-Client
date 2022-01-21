import { User } from '../../../../core/model/user.model';

export type CardsState = {
    cards: User[] | undefined;
    isLoading: boolean;
    isEndReached: boolean;
};