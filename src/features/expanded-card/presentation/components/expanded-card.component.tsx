import BottomSheet from '@gorhom/bottom-sheet';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components';

import { Reaction } from '../../../../core/model/explore.model';
import { Background } from '../../../../core/presentation/components/container/background.styled';
import { CustomSwipeableRef, Swipeable } from '../../../../core/presentation/components/swipes/swipeable.component';
import { UserInfo } from '../../../../core/presentation/components/user-info/user-info.component';
import { ExpandedCardScreenNavigationProp, ExpandedCardScreenRouteProp } from '../navigation/routing.types';

export type ExpandedCardScreenProps = {
    route: ExpandedCardScreenRouteProp;
    navigation: ExpandedCardScreenNavigationProp;
};

export const ExpandedCardScreen: React.FC<ExpandedCardScreenProps> = (props: ExpandedCardScreenProps) => {
    const theme = useTheme();
    const [focused, setFocused] = useState(false);
    const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const panRef = useRef<CustomSwipeableRef | null>(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        setTimeout(() => {
            bottomSheetRef.current?.snapToIndex(1);
        }, 600);
    }, [focused]);

    const onFocus = useCallback(() => {
        setFocused(true);
    }, []);

    useFocusEffect(onFocus);

    const handleSwipe = useCallback(
        (reaction: Reaction) => {
            props.navigation.goBack();

            setTimeout(() => {
                props.route.params?.onGoBack && props.route.params.onGoBack(reaction);
            }, 500);
        },
        [props.navigation, props.route.params]
    );

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1 && isFocused) {
                props.navigation.goBack();
            }
        },
        [props.navigation, isFocused]
    );

    return (
        <View style={{ flex: 1 }}>
            <SharedElement id={`user_image.${props.route.params.user.id}`} style={StyleSheet.absoluteFill}>
                <FastImage
                    source={{ uri: props.route.params.user.photo.link }}
                    style={StyleSheet.absoluteFill}
                    resizeMode={'cover'}
                />
            </SharedElement>
            <Swipeable
                ref={(ref) => (panRef.current = ref)}
                disabled={!props.route.params.onGoBack}
                onRightSwipe={() => handleSwipe(Reaction.LIKE)}
                onLeftSwipe={() => handleSwipe(Reaction.DISLIKE)}
            >
                {focused && (
                    <BottomSheet
                        enablePanDownToClose
                        ref={bottomSheetRef}
                        simultaneousHandlers={panRef.current?.raw}
                        index={-1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        handleStyle={{
                            backgroundColor: theme.colors.background,
                            borderTopLeftRadius: theme.borderRadius.medium,
                            borderTopRightRadius: theme.borderRadius.medium,
                        }}
                        handleIndicatorStyle={{
                            backgroundColor: theme.colors.componentLabel,
                            width: theme.dimensions.width * 0.2,
                        }}
                    >
                        <Background>
                            <UserInfo user={props.route.params.user} />
                        </Background>
                    </BottomSheet>
                )}
            </Swipeable>
        </View>
    );
};
