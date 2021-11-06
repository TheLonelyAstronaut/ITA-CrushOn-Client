import * as React from 'react';
import { StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Color, Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: Color;
    size: number;
}

const AnimatedPath = (Animated.createAnimatedComponent(Path) as unknown) as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const ProfileSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 30 28">
            <AnimatedPath
                d="M18.4058 7.53846C18.1761 10.5887 15.8278 13.0769 13.2497 13.0769C10.6717 13.0769 8.31925 10.5892 8.09367 7.53846C7.85931 4.36538 10.1444 2 13.2497 2C16.3551 2 18.6401 4.42308 18.4058 7.53846Z"
                stroke={color}
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <AnimatedPath
                d="M13.2497 16.7692C8.15225 16.7692 2.97862 19.5385 2.02124 24.7654C1.90581 25.3954 2.26791 26 2.93761 26H23.5618C24.2321 26 24.5942 25.3954 24.4788 24.7654C23.5208 19.5385 18.3472 16.7692 13.2497 16.7692Z"
                stroke={color}
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};