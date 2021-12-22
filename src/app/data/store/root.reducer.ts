import { combineReducers } from "redux";

import { settingsReducer } from "../../../features/profile/data/store/settings.reducer";
import { registrationReducer } from "../../../features/registration/data/store/registration.reducer";

import { ApplicationState } from "./types";

const rootReducer = combineReducers<ApplicationState>({
    settings: settingsReducer,
    registration: registrationReducer,
});

export default rootReducer;