import { createReducer } from '@reduxjs/toolkit';

import { GET_MATCHES } from './discover.actions';
import { DiscoverState } from './discover.state';

const initialState = {
    isLoading: true,
    matches: undefined,
};

export const discoverReducer = createReducer<DiscoverState>(initialState, (builder) => {
    builder
        .addCase(GET_MATCHES.STARTED, (state) => {
            state.isLoading = true;
        })
        .addCase(GET_MATCHES.COMPLETED, (state, action) => {
            state.isLoading = false;
            state.matches = action.payload;
        });
});
