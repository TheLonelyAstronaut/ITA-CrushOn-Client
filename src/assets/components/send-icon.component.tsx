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

export const SendSVG: React.FC<SVGProps> = ({ color }: SVGProps) => {
    return (
        <Svg width={28} height={28} viewBox="-1 -1 22 22"> 
            <AnimatedPath
                d="M13.4109 17.7352L9.86733 10.6491L17.8396 2.67795L13.4109 17.7352ZM2.01533 6.33962L17.0737 1.91203L9.10141 9.8832L2.01533 6.33962ZM0.389246 5.68962C-0.0830869 5.82828 -0.140504 6.47287 0.29933 6.69387L8.80566 10.9459L13.0577 19.4512C13.2777 19.891 13.9233 19.8336 14.062 19.3613L19.4787 0.944618C19.5989 0.534034 19.2176 0.151618 18.8059 0.272951L0.389246 5.68962Z"
                fill={color}
                fillRule='evenodd'
                stroke={color}
                strokeWidth={0.5}               
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};