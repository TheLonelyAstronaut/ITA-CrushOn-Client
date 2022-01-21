import { combineReducers } from 'redux';

import { remoteConfigReducer } from '../../../core/data/store/remote-config/remote-config.reducer';
import { userReducer } from '../../../core/data/store/user/user.reducer';
import { cardsReducer } from '../../../features/cards/data/store/cards.reducer';
import { discoverReducer } from '../../../features/discover/data/store/discover.reducer';
import { registrationReducer } from '../../../features/registration/data/store/registration.reducer';
import { settingsReducer } from '../../../features/settings/data/store/settings.reducer';

import { ApplicationState } from './types';

const rootReducer = combineReducers<ApplicationState>({
    settings: settingsReducer,
    registration: registrationReducer,
    user: userReducer,
    cards: cardsReducer,
    remoteConfig: remoteConfigReducer,
    discover: discoverReducer,
});

export default rootReducer;
