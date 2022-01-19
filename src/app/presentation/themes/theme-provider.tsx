import React, { ReactNode, useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { getTheme } from "../../../features/settings/data/store/settings.selectors";


import { darkTheme, lightTheme, ThemesEnum } from "./root.theme";

type ThemeProviderProps = {
    children: ReactNode;
};

export const ConnectedThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const preferredTheme = useSelector(getTheme);

    const [theme, setTheme] = useState(ThemesEnum.LIGHT);

    useEffect(() => {
        if(preferredTheme === ThemesEnum.AUTO) {
            const sub = Appearance.addChangeListener((data) => {
                setTheme(data.colorScheme === 'light' ? ThemesEnum.LIGHT : ThemesEnum.DARK);
            });

            setTheme(Appearance.getColorScheme() === 'light' ? ThemesEnum.LIGHT : ThemesEnum.DARK);

            return () => sub.remove && sub.remove();
        } else {
            setTheme(preferredTheme)
        }
    }, [preferredTheme]);

    return (
        <ThemeProvider theme={theme === ThemesEnum.LIGHT ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    );
};