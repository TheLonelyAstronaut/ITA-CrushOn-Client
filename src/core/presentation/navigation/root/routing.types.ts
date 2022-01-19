import { Reaction } from '../../../model/explore.model';
import { User } from '../../../model/user.model';

export type RootNavigatorParamList = {
    Auth: undefined;
    Tabs: undefined;
    ExpandedCard: {
        user: User;
        onGoBack?: (reaction: Reaction) => void;
    };
    Chat: {
        user: User;
    };
};
