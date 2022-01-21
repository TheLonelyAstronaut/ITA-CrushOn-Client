import { User } from '../../../../core/model/user.model';

export type DiscoverState = {
    isLoading: boolean;
    matches: User[] | undefined;
};
