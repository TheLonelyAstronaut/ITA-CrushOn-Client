import { Chat } from '../../../../features/chat/data/database/model/chat.model';
import { User as DBUser } from '../../../../features/chat/data/database/model/user.model';
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
        user: DBUser;
        chat: Chat;
    };
};
