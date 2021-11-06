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

export const EditSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 16 16">
            <AnimatedPath
                d="M11.5 1L11.5188 1.02874L2.49742 10.0703L1 13L3.92909 11.5026L12.9727 2.47268L11.5 1Z"
                stroke={color}
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};