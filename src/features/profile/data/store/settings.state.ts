import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";

export type ThemeState = {
    theme: ThemesEnum;
};

export type SettingsState = {
    theme: ThemeState;
};