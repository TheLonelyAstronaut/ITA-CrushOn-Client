import React, {
    ForwardedRef,
    forwardRef,
    ForwardRefExoticComponent,
    PropsWithChildren,
    PropsWithoutRef,
    ReactNode,
    RefAttributes,
    RefObject,
    useCallback,
    useImperativeHandle,
    useRef,
} from 'react';
import { Dimensions, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    runOnUI,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const LEFT_THRESHOLD = SCREEN_WIDTH / 3;
const ROTATION_MAX_DEGREE = 20;
const MAX_AVAILABLE_ROTATION = 45;
const MAX_AVAILABLE_SHEET_HIDING_DELTA = 100;

export const getRotateAngle = (translationX: number): number => {
    'worklet';
    const margin = 70 - Math.abs(translationX);

    if (margin < 0) {
        return translationX < 0
            ? (+(translationX + 70) * ROTATION_MAX_DEGREE) / LEFT_THRESHOLD
            : (+(translationX - 70) * ROTATION_MAX_DEGREE) / LEFT_THRESHOLD;
    } else {
        return withTiming(0);
    }
};

export const getTranslationX = (angle: number): number => {
    'worklet';
    const multiplier = angle / MAX_AVAILABLE_ROTATION;

    return multiplier * SCREEN_WIDTH;
};

export const getTranslationY = (angle: number): number => {
    'worklet';
    const multiplier = angle / MAX_AVAILABLE_ROTATION;

    return Math.abs(multiplier) * MAX_AVAILABLE_SHEET_HIDING_DELTA;
};

export type SwipeableProps = PropsWithChildren<{
    onRightSwipe: () => void;
    onLeftSwipe: () => void;
    disabled?: boolean;
}>;

export type SwipeableComponentType = ForwardRefExoticComponent<
    PropsWithoutRef<SwipeableProps & { children?: ReactNode | undefined }> & RefAttributes<unknown>
>;

export type CustomSwipeableRef = {
    raw: RefObject<PanGestureHandler>;
    swipeRight: (ignoreCallbacks?: boolean) => void;
    swipeLeft: (ignoreCallbacks?: boolean) => void;
};

export const Swipeable: SwipeableComponentType = forwardRef(
    (props: SwipeableProps, ref: ForwardedRef<CustomSwipeableRef>) => {
        const rotate = useSharedValue(0);
        const translateX = useSharedValue(0);
        const translateY = useSharedValue(0);
        const reaction = useSharedValue(-1);

        const panRef = useRef<PanGestureHandler>();

        const onThresholdMet = useCallback(() => {
            if (reaction.value == 1) {
                props.onRightSwipe();
            } else if (reaction.value == 0) {
                props.onLeftSwipe();
            }
        }, [props, reaction.value]);

        const setReaction = useCallback(
            (value?: number, ignoreCallbacks?: boolean) => {
                'worklet';
                const countFrom = value ?? rotate.value;

                const rotationValue = countFrom > 0 ? 90 : -90;
                rotate.value = withTiming(rotationValue, undefined, () => {
                    if (rotate.value > 0) {
                        reaction.value = 1;
                    } else {
                        reaction.value = 0;
                    }

                    if (!ignoreCallbacks) {
                        runOnJS(onThresholdMet)();
                    }
                });

                translateX.value = withTiming(getTranslationX(rotationValue));
                translateY.value = withTiming(getTranslationY(rotationValue));
            },
            [onThresholdMet, reaction, rotate, translateX, translateY]
        );

        const gestureHandler = useAnimatedGestureHandler<
            PanGestureHandlerGestureEvent,
            { posX: number; posY: number; delta: number }
        >(
            {
                onStart: (event, ctx) => {
                    ctx.posX = 0;
                    ctx.posY = 0;
                    ctx.delta = 70;
                },
                onActive: (event) => {
                    rotate.value = getRotateAngle(event.translationX);
                    translateX.value = getTranslationX(rotate.value);
                    translateY.value = getTranslationY(rotate.value);
                },
                onFinish: () => {
                    if (Math.abs(rotate.value) > ROTATION_MAX_DEGREE * 1.2) {
                        setReaction();
                    } else {
                        rotate.value = withTiming(0);
                        translateX.value = withTiming(0);
                        translateY.value = withTiming(0);
                    }
                },
            },
            [onThresholdMet, setReaction]
        );

        const swipeLeft = useCallback(
            (ignoreCallbacks?: boolean) => {
                runOnUI(setReaction)(-1, ignoreCallbacks);
            },
            [setReaction]
        );

        const swipeRight = useCallback(
            (ignoreCallbacks?: boolean) => {
                runOnUI(setReaction)(1, ignoreCallbacks);
            },
            [setReaction]
        );

        const animatedStyle = useAnimatedStyle(() => {
            return {
                flex: 1,
                transform: [
                    {
                        rotate: `${rotate.value}deg`,
                    },
                    {
                        translateX: translateX.value,
                    },
                    {
                        translateY: translateY.value,
                    },
                ],
            };
        });

        useImperativeHandle(ref, () => ({
            raw: panRef as RefObject<PanGestureHandler>,
            swipeRight: swipeRight,
            swipeLeft: swipeLeft,
        }));

        return (
            <View style={{ flex: 1 }}>
                <PanGestureHandler ref={panRef} onGestureEvent={gestureHandler} enabled={!props.disabled}>
                    <Animated.View style={animatedStyle}>{props.children}</Animated.View>
                </PanGestureHandler>
            </View>
        );
    }
);
