import { PlatformOSType } from 'react-native';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        platform: PlatformOSType;
        dimensions: {
            width: number;
            height: number;
        };
        photo: {
            width: number;
            height: number;
            borderRadius: number;
        };
        fontSize: {
            names: number;
            extralarge: number;
            large: number;
            medium: number;
            small: number;
            extraSmall: number;
        };
        tabBarHeight: number;
        composerHeight: number;
        fontWeight: {
            bold: string;
            normal: string;
        };
        spacer: number;
        borderRadius: {
            medium: number;
            small: number;
        };
        separators: {
            vertical: {
                large: number;
                medium: number;
                small: number;
                extrasmall: number;
            };
        };
        colors: {
            background: string;
            text: string;
            cardText: string;
            component: string;
            componentLabel: string;
            contrast: string;
            statusBar: string;
            auth: string;
            logo: string;
        };
    }
}
