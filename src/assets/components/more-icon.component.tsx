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

export const MoreSVG: React.FC<SVGProps> = ({ color }: SVGProps) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 30 28">
            <AnimatedPath
                d="M20.502 0C19.119 0 18 1.119 18 2.5C18 3.857 19.083 4.963 20.435 4.999H20.569C21.919 4.963 23.002 3.857 23.002 2.5C23.002 1.119 21.882 0 20.502 0ZM11.501 0C10.119 0 9.001 1.119 9.001 2.5C9.001 3.857 10.083 4.963 11.434 4.999H11.568C12.919 4.963 14.001 3.857 14.001 2.5C14.001 1.119 12.883 0 11.501 0ZM2.5 0C1.119 0 0 1.119 0 2.5C0 3.857 1.083 4.963 2.433 4.999H2.567C3.919 4.963 5.003 3.857 5.003 2.5C5.003 1.119 3.882 0 2.5 0Z"
                fill={color}
                fillRule="evenodd"               
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};