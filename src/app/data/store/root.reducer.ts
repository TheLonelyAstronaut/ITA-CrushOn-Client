import { combineReducers } from "redux";

import { userReducer } from "../../../core/data/store/user/user.reducer";
import { settingsReducer } from "../../../features/profile/data/store/settings.reducer";
import { registrationReducer } from "../../../features/registration/data/store/registration.reducer";

import { ApplicationState } from "./types";

const rootReducer = combineReducers<ApplicationState>({
    settings: settingsReducer,
    registration: registrationReducer,
    user: userReducer,
});

export default rootReducer;