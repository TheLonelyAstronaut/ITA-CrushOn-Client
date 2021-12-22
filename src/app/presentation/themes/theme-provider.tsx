import React, { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { getTheme } from "../../../features/profile/data/store/settings.selectors";

import { darkTheme, lightTheme, ThemesEnum } from "./root.theme";

type ThemeProviderProps = {
    children: ReactNode;
};

export const ConnectedThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const preferredTheme = useSelector(getTheme);

    const colorScheme = useColorScheme();

    let theme: ThemesEnum = ThemesEnum.LIGHT;

    if (preferredTheme === ThemesEnum.AUTO) {
        theme = ( colorScheme === 'light' ? ThemesEnum.LIGHT : ThemesEnum.DARK);
    } else {
        theme = preferredTheme;
    }

    return (
        <ThemeProvider theme={theme === ThemesEnum.LIGHT ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    );
};