import { createSelector, Selector } from 'reselect';

import { ApplicationState } from '../../../../app/data/store/types';
import { ThemesEnum } from '../../../../app/presentation/themes/root.theme';

import { SettingsState, ThemeState } from './settings.state';

export const getSettingsState: Selector<ApplicationState, SettingsState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.settings,
);

export const getThemeState: Selector<ApplicationState, ThemeState> = createSelector(
    getSettingsState,
    (state) => state.theme,
);

export const getTheme: Selector<ApplicationState, ThemesEnum> = createSelector(
    getThemeState,
    (state) => state.theme,
);