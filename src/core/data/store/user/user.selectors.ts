import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";
import { User } from "../../../model/user.model";

import { UserState } from "./user.state";

export const getUserState: Selector<ApplicationState, UserState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.user,
);

export const getUser: Selector<ApplicationState, User> = createSelector(
    getUserState,
    (state) => state.userInfo,
);

export const getUserPassions: Selector<ApplicationState, string[]> = createSelector(
    getUser,
    (state) => state.passions,
);

export const getToken: Selector<ApplicationState, string> = createSelector(
    getUserState,
    (state) => state.token,
);