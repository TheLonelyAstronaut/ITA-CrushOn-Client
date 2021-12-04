import React from 'react';
import { useTranslation } from 'react-i18next';

import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { User } from '../../../model/user.model';
import { TextType } from '../../themes/types';
import { Text } from '../text/text.styled';

import { FullyPressable } from './styled/fully-pressable.styled';
import { ImageBackground } from './styled/image-background.styled';
import { LocationWrapper } from './styled/location-wrapper.styled';
import { CardTextWrapper } from './styled/text-wrapper.styled';

export type CardProps = {
    user: User;
    expandCard: (id: number) => void;
    scale: number;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const { t } = useTranslation();

    return (
        <ImageBackground
            source={{
                uri: props.user.imgUrl,
            }}
            imageStyle={{ borderRadius: 15 }}
            resizeMode="cover"
        >
            <FullyPressable onPress={() => props.expandCard(props.user.id)}>
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
        </ImageBackground>
    );
};
