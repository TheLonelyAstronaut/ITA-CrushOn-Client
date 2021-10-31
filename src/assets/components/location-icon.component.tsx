import * as React from 'react';
import { StyleProp } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: Animated.Node<string>;
    size: number;
    strokeWidth: number;
}

const AnimatedPath = (Animated.createAnimatedComponent(Path) as unknown) as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const LocationSVG: React.FC<SVGProps> = ({ color, size, strokeWidth }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 17 17">
            <AnimatedPath
                d="M16 1L1 7.88047H8.8125C8.89538 7.88047 8.97487 7.91339 9.03347 7.972C9.09208 8.0306 9.125 8.11009 9.125 8.19297V16L16 1Z"
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};