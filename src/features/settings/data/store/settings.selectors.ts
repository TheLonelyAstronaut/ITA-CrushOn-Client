import { createSelector, Selector } from 'reselect';

import { ApplicationState } from '../../../../app/data/store/types';
import { ThemesEnum } from '../../../../app/presentation/themes/root.theme';

import { SettingsState } from './settings.state';

export const getSettingsState: Selector<ApplicationState, SettingsState> = createSelector(
    (state: ApplicationState) => state,
    (state) => state.settings
);

export const getTheme: Selector<ApplicationState, ThemesEnum> = createSelector(
    getSettingsState,
    (state) => state.theme
);
