import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';

import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { User } from '../../../model/user.model';
import { Reaction } from '../../../util/reaction.util';
import { TextType } from '../../themes/types';
import { CustomSwipeableRef, Swipeable } from '../swipes/swipeable.component';
import { Text } from '../text/text.styled';

import { FullyPressable } from './styled/fully-pressable.styled';
import { LocationWrapper } from './styled/location-wrapper.styled';
import { CardTextWrapper } from './styled/text-wrapper.styled';

export type CardProps = {
    user: User;
    scale: number;
    handleReaction?: () => void;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const swipeable = useRef<CustomSwipeableRef>(null);

    const handleReaction = useCallback(
        (reaction: Reaction) => {// why to give it reaction??? to send like/dislike to server?---------------------------------------------------------
            props?.handleReaction && props.handleReaction();
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
            onGoBack: props?.handleReaction ? handleBackNavigation : undefined, //is this norma???????---------------------
        });
    }, [handleBackNavigation, navigation, props.user, props?.handleReaction]);

    return (
        <Swipeable
            ref={swipeable}
            disabled={!props.handleReaction}
            onRightSwipe={() => handleReaction(Reaction.LIKE)}// why to give it reaction???--------------------------------
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
                        {props.user.name},{props.user.age}
                    </Text>
                    <LocationWrapper>
                        <Text type={TextType.cardGeo} scale={props.scale}>
                            {props.user.city.name}
                        </Text>
                        <LocationSVG color="white" size={10* props.scale} strokeWidth={props.scale * 1.2} />
                    </LocationWrapper>
                </CardTextWrapper>
            </FullyPressable>
        </Swipeable>
    );
};
