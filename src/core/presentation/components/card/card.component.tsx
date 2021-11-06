import React from 'react';
import {LocationSVG} from '../../../../assets/components/location-icon.component';
import {User} from '../../../model/user.model';
import {FullyPressable} from './styled/fully-pressable.styled';
import {ImageBackgroundStyled} from './styled/image-background.styled';
import {LocationWrapper} from './styled/location-wrapper.styled';
import {TextWrapper} from './text-wrapper.component';
import {WhiteText} from './text.component';
import {TextStyle} from "./styled/text.styled";

export type CardProps = {
    user: User;
    expandCard: (id: number) => void;
    scale: number;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    return (
        <ImageBackgroundStyled
            source={{
                uri: props.user.imgUrl,
            }}
            imageStyle={{ borderRadius: 15 }}
            resizeMode="cover"
        >
            <FullyPressable onPress={() => props.expandCard(props.user.id)}>
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
        </ImageBackgroundStyled>
    );
};
