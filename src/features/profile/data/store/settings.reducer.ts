import { createReducer } from "@reduxjs/toolkit";

import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";

import { SET_THEME } from "./settings.actions";
import { SettingsState } from "./settings.state";

const initialState: SettingsState = {
    theme: {
        theme: ThemesEnum.AUTO,
    },
};

export const settingsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_THEME.SET, (state, action) => {
            state.theme.theme = action.payload;
        });
});