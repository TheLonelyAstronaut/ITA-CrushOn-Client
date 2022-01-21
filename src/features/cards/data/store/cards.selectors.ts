import { createSelector, Selector } from 'reselect';

import { ApplicationState } from '../../../../app/data/store/types';
import { User } from '../../../../core/model/user.model';

import { CardsState } from './cards.state';

export const getCardsState: Selector<ApplicationState, CardsState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.cards
);

export const getCards: Selector<ApplicationState, User[]> = createSelector(
    getCardsState,
    (state) => state.cards as User[]
);

export const getIsCardsLoading: Selector<ApplicationState, boolean> = createSelector(
    getCardsState,
    (state) => state.isLoading
);

export const getIsEndReached: Selector<ApplicationState, boolean> = createSelector(
    getCardsState,
    (state) => state.isEndReached
);
