import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";
import { City, Passion } from "../../../model/user.model";

import { RemoteConfigState } from "./remote-config.state";

export const getRemoteConfigState: Selector<ApplicationState, RemoteConfigState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.remoteConfig,
);

export const getCitiesData: Selector<ApplicationState, City[]> = createSelector(
    getRemoteConfigState,
    (state) => state.cities as City[],
);

export const getPassionsData: Selector<ApplicationState, Passion[]> = createSelector(
    getRemoteConfigState,
    (state) => state.passions as Passion[],
);