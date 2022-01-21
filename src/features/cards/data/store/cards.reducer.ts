import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { mmkv } from '../../../../core/util/mmkv.utils';

import { GET_CARDS, SET_REACTION } from './cards.actions';
import { CardsState } from './cards.state';

const initialState: CardsState = {
    cards: undefined,
    isLoading: true,
    isEndReached: false,
};

const _cardsReducer = createReducer<CardsState>(initialState, (builder) => {
    builder
        .addCase(SET_REACTION.COMPLETED, (state) => {
            state.cards?.shift();
        })
        .addCase(GET_CARDS.STARTED, (state) => {
            state.isLoading = true;
        })
        .addCase(GET_CARDS.COMPLETED, (state, action) => {
            if (!state.cards) {
                state.cards = action.payload;
            } else {
                state.cards = [...state.cards, ...action.payload];
            }

            state.isLoading = false;

            if (!action.payload.length) {
                state.isEndReached = true;
            }
        })
        .addCase(GET_CARDS.RESET, (state) => {
            delete state.cards;
            state.isLoading = false;
            state.isEndReached = false;
        });
});

export const cardsReducer = persistReducer(
    {
        key: 'cards',
        storage: mmkv.getReduxPersistAdapter(),
    },
    _cardsReducer
);
