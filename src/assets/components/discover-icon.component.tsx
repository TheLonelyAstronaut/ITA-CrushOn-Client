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

export const DiscoverSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 30 28">
            <AnimatedPath
                d="M21.6997 2C17.2734 2 15.0916 6.36362 15.0916 6.36362C15.0916 6.36362 12.9097 2 8.4834 2C4.88614 2 2.03752 5.00953 2.0007 8.60066C1.9257 16.0549 7.91409 21.3561 14.4779 25.8111C14.6589 25.9342 14.8727 26 15.0916 26C15.3104 26 15.5242 25.9342 15.7052 25.8111C22.2684 21.3561 28.2567 16.0549 28.1824 8.60066C28.1456 5.00953 25.297 2 21.6997 2Z"
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