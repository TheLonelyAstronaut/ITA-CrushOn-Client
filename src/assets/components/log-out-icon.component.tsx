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

export const LogOutSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
            <AnimatedPath
                d="M13.5 14V18.5C13.5 19.163 13.2805 19.7989 12.8898 20.2678C12.4991 20.7366 11.9692 21 11.4167 21H3.08333C2.5308 21 2.00089 20.7366 1.61019 20.2678C1.21949 19.7989 1 19.163 1 18.5V3.5C1 2.83696 1.21949 2.20107 1.61019 1.73223C2.00089 1.26339 2.5308 1 3.08333 1H11C12.1505 1 13.5 2.11937 13.5 3.5V8M16.8333 16L21 11M21 11L16.8333 6M21 11H6.83333"
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
