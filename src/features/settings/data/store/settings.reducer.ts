import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { ThemesEnum } from '../../../../app/presentation/themes/root.theme';
import { mmkv } from '../../../../core/util/mmkv.utils';

import { SET_THEME } from './settings.actions';
import { SettingsState } from './settings.state';

const initialState: SettingsState = {
    theme: ThemesEnum.AUTO,
};

const _settingsReducer = createReducer(initialState, (builder) => {
    builder.addCase(SET_THEME.SET, (state, action) => {
        state.theme = action.payload;
    });
});

export const settingsReducer = persistReducer(
    {
        key: 'settings',
        storage: mmkv.getReduxPersistAdapter(),
    },
    _settingsReducer
);
