import { User } from '../../../model/user.model';
import { Reaction } from '../../../util/reaction.util';

export type RootNavigatorParamList = {
    Auth: undefined;
    Tabs: undefined;
    ExpandedCard: {
        user: User;
        onGoBack: (reaction: Reaction) => void;
    };
    Chat: {
        id: number;
    };
    ProfileEdit: undefined;
};
