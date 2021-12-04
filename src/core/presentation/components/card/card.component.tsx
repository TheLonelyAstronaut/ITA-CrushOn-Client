import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import {useTranslation} from "react-i18next";

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
            disabled={!props.handleReaction}
            onRightSwipe={() => handleReaction(Reaction.LIKE)}
            onLeftSwipe={() => handleReaction(Reaction.DISLIKE)}
        >
            <FullyPressable onPress={expandCard}>
                <CardTextWrapper scale={props.scale}>
                    <Text type={TextType.cardName} scale={props.scale}>
                        {props.user.name},{props.user.age}
                    </Text>
                    <LocationWrapper>
                        <LocationSVG color="white" size={14 * props.scale} strokeWidth={props.scale} />
                        <Text type={TextType.cardGeo} scale={props.scale}>
                            {props.user.location} {t('card.kmAway')}
                        </Text>
                    </LocationWrapper>
                </CardTextWrapper>
            </FullyPressable>
        </Swipeable>
    );
};
