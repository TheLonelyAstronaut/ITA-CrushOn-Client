import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultTheme } from 'styled-components';

export enum ThemesEnum {
    LIGHT,
    DARK,
}

export type ThemeState = {
    theme: ThemesEnum;
};

export const DEVICE_SIZE = Dimensions.get('window');

export const defaultValues: DefaultTheme = {
    dimensions: {
        width: DEVICE_SIZE.width,
        height: DEVICE_SIZE.height,
    },
    photo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    fontSize: {
        names: 28,
        extralarge: 20,
        large: 18,
        medium: 16,
        small: 14,
        extraSmall: 12,
    },
    tabBarHeight: 65,
    fontWeight: {
        bold: 'bold',
        normal: 'normal',
    },
    spacer: 8,
    borderRadius: {
        medium: 15,
        small: 10,
    },
    separators: {
        vertical: {
            large: 40,
            medium: 30,
            small: 20,
            extrasmall: 10,
        },
    },
} as DefaultTheme;

export const lightTheme: DefaultTheme = {
    ...defaultValues,
    colors: {
        background: '#FFFFFF',
        text: '#000000',
        cardText: '#FFFFFF',
        component: '#DFE6FA',
        componentLabel: '#53377A',
        contrast: '#A100F2',
        statusBar: 'dark-content',
        auth: '#BBADFF',
        logo: '#53377A',
    },
};

export const darkTheme: DefaultTheme = {
    ...defaultValues,
    colors: {
        background: '#000000',
        text: '#FFFFFF',
        cardText: '#FFFFFF',
        component: '#1F1F1F',
        componentLabel: '#8C65B6',
        contrast: '#DC6ACF',
        statusBar: 'light-content',
        auth: '#301934',
        logo: '#8C65B6',
    },
};
