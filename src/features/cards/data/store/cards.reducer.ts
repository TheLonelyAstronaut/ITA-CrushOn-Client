import { createReducer } from "@reduxjs/toolkit";

import { GET_CARDS } from "./cards.actions";
import { CardsState } from "./cards.state";

const initialState: CardsState = {
    cards: [],
    page: 0,
};

export const cardsReducer = createReducer<CardsState>(initialState, (builder) => {
    builder
        .addCase(GET_CARDS.COMPLETED, (state, action) => {
            state.cards = action.payload;
            state.page++;
        });
});