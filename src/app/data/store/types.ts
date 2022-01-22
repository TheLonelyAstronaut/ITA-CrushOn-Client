import { remoteConfigReducer } from '../../../core/data/store/remote-config/remote-config.reducer';
import { userReducer } from '../../../core/data/store/user/user.reducer';
import { cardsReducer } from '../../../features/cards/data/store/cards.reducer';
import { chatReducer } from '../../../features/chat/data/store/chat.reducer';
import { discoverReducer } from '../../../features/discover/data/store/discover.reducer';
import { registrationReducer } from '../../../features/registration/data/store/registration.reducer';
import { settingsReducer } from '../../../features/settings/data/store/settings.reducer';

export type ApplicationState = {
    settings: ReturnType<typeof settingsReducer>;
    registration: ReturnType<typeof registrationReducer>;
    user: ReturnType<typeof userReducer>;
    cards: ReturnType<typeof cardsReducer>;
    remoteConfig: ReturnType<typeof remoteConfigReducer>;
    discover: ReturnType<typeof discoverReducer>;
    chat: ReturnType<typeof chatReducer>;
};
