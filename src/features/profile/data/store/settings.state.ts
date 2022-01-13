import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";
import { City, Passion } from "../../../../core/model/user.model";

export type ThemeState = {
    theme: ThemesEnum;
};

export type SettingsState = {
    cities: City[];
    passions: Passion[];
    theme: ThemeState;
};