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

export const ChatsListSVG: React.FC<SVGProps> = ({ color, size }: SVGProps) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 30 28">
            <AnimatedPath
                d="M4.27832 21.1538C4.34697 20.9012 4.19524 20.5498 4.05044 20.2965C4.00535 20.221 3.95644 20.1478 3.9039 20.0773C2.66194 18.1938 1.99998 15.9873 2.00006 13.7312C1.97986 7.25519 7.34985 2 13.9902 2C19.7814 2 24.6154 6.01192 25.745 11.3375C25.9142 12.1271 25.9997 12.9323 26 13.7398C26 20.225 20.8371 25.5627 14.1968 25.5627C13.141 25.5627 11.716 25.2973 10.9389 25.0798C10.1618 24.8623 9.38581 24.5738 9.18562 24.4965C8.98087 24.4178 8.76343 24.3774 8.54408 24.3771C8.30449 24.3762 8.06721 24.4239 7.84658 24.5173L3.93332 25.9296C3.84759 25.9666 3.75675 25.9903 3.6639 26C3.59063 25.9998 3.51813 25.985 3.4506 25.9566C3.38308 25.9281 3.32186 25.8866 3.27051 25.8343C3.21916 25.7821 3.17869 25.7201 3.15144 25.6521C3.1242 25.5841 3.11072 25.5113 3.11178 25.4381C3.1166 25.3738 3.1282 25.3101 3.1464 25.2483L4.27832 21.1538Z"
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