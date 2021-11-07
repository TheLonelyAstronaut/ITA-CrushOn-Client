import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { User } from '../../../model/user.model';
import { Reaction } from '../../../util/reaction.util';
import { CustomSwipeableRef, Swipeable } from '../swipes/swipeable.component';

import { FullyPressable } from './styled/fully-pressable.styled';
import { LocationWrapper } from './styled/location-wrapper.styled';
import { TextStyle } from './styled/text.styled';
import { TextWrapper } from './text-wrapper.component';
import { WhiteText } from './text.component';


export type CardProps = {
    user: User;
    scale: number;
    handleReaction: () => void;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const navigation = useNavigation();
    const swipeable = useRef<CustomSwipeableRef>();

    const handleReaction = useCallback(
        (reaction: Reaction) => {
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
            onGoBack: handleBackNavigation,
        });
    }, [handleBackNavigation, navigation, props.user]);

    return (
        <Swipeable
            ref={swipeable}
            onRightSwipe={() => handleReaction(Reaction.LIKE)}
            onLeftSwipe={() => handleReaction(Reaction.DISLIKE)}
        >
            <FullyPressable onPress={expandCard}>
                <SharedElement id={`user_image.${props.user.id}`} style={StyleSheet.absoluteFill}>
                    <Image
                        source={{ uri: props.user.imgUrl }}
                        style={{ borderRadius: 15, backgroundColor: 'blue', flex: 1 }}
                        resizeMode={'cover'}
                    />
                </SharedElement>
                <TextWrapper scale={props.scale}>
                    <WhiteText style={TextStyle.Bold} scale={props.scale}>
                        {props.user.name},{props.user.age}
                    </WhiteText>
                    <LocationWrapper>
                        <LocationSVG color="white" size={14 * props.scale} strokeWidth={props.scale} />
                        <WhiteText style={TextStyle.Normal} scale={props.scale} marginLeftSpacer={1}>
                            {props.user.location} km away
                        </WhiteText>
                    </LocationWrapper>
                </TextWrapper>
            </FullyPressable>
        </Swipeable>
    );
};
