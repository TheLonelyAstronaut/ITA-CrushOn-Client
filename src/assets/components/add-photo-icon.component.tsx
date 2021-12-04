/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: string;
}

const AnimatedPath = Animated.createAnimatedComponent(Path) as unknown as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const AddPhotoSVG: React.FC<SVGProps> = ({ color }: SVGProps) => {
    return (
        <Svg width={200} height={200} viewBox="-16.5 -16.5 150 150">
            <AnimatedPath
                d="M115 58.5C115 27.3073 89.6927 2 58.5 2C27.3073 2 2 27.3073 2 58.5C2 89.6927 27.3073 115 58.5 115C89.6927 115 115 89.6927 115 58.5Z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <AnimatedPath
                d="M82.0417 58.5H34.9584M58.5 34.9583V82.0416V34.9583Z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
