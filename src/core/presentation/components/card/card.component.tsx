import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { Reaction } from '../../../model/explore.model';
import { User } from '../../../model/user.model';
import { useCalculateAge } from '../../../util/calculate-age.util';
import { useResolveLocalizedString } from '../../../util/resolve-localized-string.util';
import { RootNavigatorParamList } from '../../navigation/root/routing.types';
import { TextType } from '../../themes/types';
import { CustomSwipeableRef, Swipeable } from '../swipes/swipeable.component';
import { Text } from '../text/text.styled';

import { FullyPressable } from './styled/fully-pressable.styled';
import { LocationWrapper } from './styled/location-wrapper.styled';
import { CardTextWrapper } from './styled/text-wrapper.styled';

export type CardProps = {
    user: User;
    scale: number;
    handleReaction?: (userId: number, reaction: Reaction) => void;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const navigation = useNavigation<NavigationProp<RootNavigatorParamList>>();
    const swipeable = useRef<CustomSwipeableRef>(null);
    const city = useResolveLocalizedString(props.user.city);
    const age = useCalculateAge(props.user.dateOfBirth);

    const handleReaction = useCallback(
        (reaction: Reaction) => {
            props?.handleReaction && props.handleReaction(props.user.id, reaction);
        },
        [props]
    );

    const handleBackNavigation = useCallback((reaction: Reaction) => {
        if (reaction == Reaction.LIKE) {
            swipeable.current?.swipeRight();
        } else {
            swipeable.current?.swipeLeft();
        }
    }, []);

    const expandCard = useCallback(() => {
        navigation.navigate('ExpandedCard', {
            user: props.user,
            onGoBack: props?.handleReaction ? handleBackNavigation : undefined,
        });
    }, [handleBackNavigation, navigation, props.user, props?.handleReaction]);

    return (
        <Swipeable
            ref={swipeable}
            disabled={!props.handleReaction}
            onRightSwipe={() => handleReaction(Reaction.LIKE)}
            onLeftSwipe={() => handleReaction(Reaction.DISLIKE)}
        >
            <SharedElement id={`user_image.${props.user.id}`} style={StyleSheet.absoluteFill}>
                <FastImage
                    source={{ uri: props.user.photo.link }}
                    style={{ borderRadius: 15, flex: 1 }}
                    resizeMode={'cover'}
                />
            </SharedElement>
            <FullyPressable onPress={expandCard}>
                <CardTextWrapper scale={props.scale}>
                    <Text type={TextType.cardName} scale={props.scale}>
                        {props.user.name},{age}
                    </Text>
                    <LocationWrapper>
                        <Text type={TextType.cardGeo} scale={props.scale}>
                            {city}
                        </Text>
                        <LocationSVG color="white" size={10 * props.scale} strokeWidth={props.scale * 1.2} />
                    </LocationWrapper>
                </CardTextWrapper>
            </FullyPressable>
        </Swipeable>
    );
};
