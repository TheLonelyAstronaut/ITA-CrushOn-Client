import * as React from 'react';
import { StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps } from 'react-native-svg';

export interface SVGProps {
    color: string;
};

const AnimatedPath = Animated.createAnimatedComponent(Path) as unknown as React.ComponentClass<
    // eslint-disable-next-line @typescript-eslint/ban-types
    Animated.AnimateProps<PathProps & { style?: StyleProp<{}> }>
>;

Animated.addWhitelistedNativeProps({
    stroke: true,
});

export const LogoSVG: React.FC<SVGProps> = ({color}: SVGProps) => {
    return (
        <Svg width={165*2} height={100*2} viewBox="-30 0 165 100"> 
            <AnimatedPath
                d="M87.421,23.35c-8.087-7.055-16.94,2.65-17.745,2.724c-3.923-5.807-11.098-6.3-12.706-6.158  C38.289,23.048,4.008,51.074,4.008,51.074c-7.668,6.683,23.73,22.511,25.745,23.301c31.63,9.328,44.337,4.622,46.544,3.939  c22.521-0.07,18.466-16.401,17.771-20.555C99.635,36.679,92.281,28.749,87.421,23.35z M64.616,26.852c0,0,0,0-32.448,9.304  C32.168,36.156,57.67,16.466,64.616,26.852z M65.026,76.601c0.979-3.09,0.334-10.918,0.334-10.918  c8.398-3.017,9.351-0.115,9.647,0.317l0.404,9.628C73.841,77.853,65.026,76.601,65.026,76.601z M78.483,52.024  c-1.74,0.479-9.707,2.004-14.809,1.164c-3.888,0.023-26.828-2.783-34.783,0.682c-0.204-0.468-2.688-1.055-1.223-2.808  c0,0,20.792-8.507,26.576-5.458c2.462-3.299,8.232-2.193,15.466-2.843C71.343,46.507,79.299,43.041,78.483,52.024z"
                fill={color}
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
