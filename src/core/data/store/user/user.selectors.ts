import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";
import { Passion, User } from "../../../model/user.model";

import { UserState } from "./user.state";


export const getUserState: Selector<ApplicationState, UserState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.user,
);

export const getUser: Selector<ApplicationState, User | undefined> = createSelector(
    getUserState,
    (state) => state.userInfo,
);

export const getUserDangerously : Selector<ApplicationState, User> = createSelector(
    getUser,
    (state) => state as User,
);

export const getPassionsDangerously: Selector<ApplicationState, Passion[]> = createSelector(
    getUserDangerously,
    (state) => state.passions as Passion[],
);

export const getIsAuthenticated : Selector<ApplicationState, boolean> = createSelector(
    getUserState,
    (state) => state.isAuthenticated,
);