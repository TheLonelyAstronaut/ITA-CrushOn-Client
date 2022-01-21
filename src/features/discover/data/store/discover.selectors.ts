import { createSelector } from 'reselect';

import { ApplicationState } from '../../../../app/data/store/types';

export const getDiscoverRootState = createSelector(
    (state: ApplicationState) => state,
    (state: ApplicationState) => state.discover
);

export const getIsMatchesLoading = createSelector(getDiscoverRootState, (state) => state.isLoading);

export const getSavedMatches = createSelector(getDiscoverRootState, (state) => state.matches);
