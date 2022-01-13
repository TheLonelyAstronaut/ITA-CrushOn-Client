import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";
import { RegistrationUser } from "../../model/register-user.model";

import { RegistrationState } from "./registration.state";

export const getRegistrationState: Selector<ApplicationState, RegistrationState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.registration,
);

export const getRegistrationData: Selector<ApplicationState, RegistrationUser> = createSelector(
    getRegistrationState,
    (state) => state.registrationData as RegistrationUser,
);