import * as React from 'react';
import { StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: Animated.Node<string>;
    size: number;
}

const AnimatedPath = (Animated.createAnimatedComponent(Path) as unknown) as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const HomeSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 25 28">
            <AnimatedPath
                d="M2 11V25.0476C2 25.3002 2.10057 25.5424 2.27958 25.7211C2.45859 25.8997 2.70138 26 2.95455 26H22.0455C22.2986 26 22.5414 25.8997 22.7204 25.7211C22.8994 25.5424 23 25.3002 23 25.0476V11"
                stroke={color}
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
			<AnimatedPath
                d="M23 11L13.3491 2.22977C13.0394 1.92514 12.3153 1.92168 12 2.22977L2 11"
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
