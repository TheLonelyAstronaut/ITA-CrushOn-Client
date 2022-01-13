import { createReducer } from "@reduxjs/toolkit";

import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";

import { GET_CITIES_DATA, GET_PASSIONS_DATA, SET_THEME } from "./settings.actions";
import { SettingsState } from "./settings.state";

const initialState: SettingsState = {
    theme: {
        theme: ThemesEnum.AUTO,
    },
    cities: [],
    passions: [],
};

export const settingsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_THEME.SET, (state, action) => {
            state.theme.theme = action.payload;
        })
        .addCase(GET_CITIES_DATA.COMPLETED, (state, action) => {
            state.cities = action.payload;
        })
        .addCase(GET_PASSIONS_DATA.COMPLETED, (state, action) => {
            state.passions = action.payload;
        });
});