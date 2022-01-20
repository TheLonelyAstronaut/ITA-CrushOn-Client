import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";
import { User } from "../../../../core/model/user.model";

import { CardsState } from "./cards.state";

export const getCardsState: Selector<ApplicationState, CardsState> = createSelector(
    (state: ApplicationState) => state,
    (state) => {
        console.log(state);
        return state.cards
    },
);

export const getCards: Selector<ApplicationState, User[]> = createSelector(
    getCardsState,
    (state) => state.cards as User[],
);
