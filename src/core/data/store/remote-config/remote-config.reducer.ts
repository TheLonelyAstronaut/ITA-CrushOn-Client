import { createReducer } from '@reduxjs/toolkit';

import { GET_CITIES_DATA, GET_PASSIONS_DATA } from './remote-config.actions';
import { RemoteConfigState } from './remote-config.state';

const initialState: RemoteConfigState = {
    cities: undefined,
    passions: undefined,
};

export const remoteConfigReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(GET_CITIES_DATA.COMPLETED, (state, action) => {
            state.cities = action.payload;
        })
        .addCase(GET_PASSIONS_DATA.COMPLETED, (state, action) => {
            state.passions = action.payload;
        });
});
