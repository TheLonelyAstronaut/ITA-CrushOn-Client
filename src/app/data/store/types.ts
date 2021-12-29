import { userReducer } from "../../../core/data/store/user/user.reducer";
import { settingsReducer } from "../../../features/profile/data/store/settings.reducer";
import { registrationReducer } from "../../../features/registration/data/store/registration.reducer";

export type ApplicationState = {
    settings: ReturnType<typeof settingsReducer>;
    registration: ReturnType<typeof registrationReducer>;
    user: ReturnType<typeof userReducer>;
};