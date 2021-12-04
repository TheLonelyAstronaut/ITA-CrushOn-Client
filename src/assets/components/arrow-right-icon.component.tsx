import * as React from 'react';
import { StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Color, Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: Color;
    size: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path) as unknown as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const ArrowRightSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size*2} viewBox="-4 -7 14 28" > 
            <AnimatedPath
                d="M1 1L8 8L1 15"
                stroke={color}
                strokeWidth={2}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
