import React from 'react';
import { View } from 'react-native';
import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { User } from '../../../model/user.model';
import { Palette } from '../../themes/palette.themes';
import { UserInfoWrapper } from './styled/user-info-wrapper.styled';
import { useTheme } from 'styled-components';
import { PassionsWrapper } from './styled/passins-wrapper.styled';
import { PassionView } from './styled/passion-view.styled';
import { PassionLabel } from './styled/passion-label.styled';
import { SeparatorVertical } from '../container/separator-vertical.styled';
import { SeparatorVerticalType, TextType } from '../../themes/types';
import { Text } from '../text/text.styled';

type UserInfoProps = {
    user: User;
};

export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
    const CurrentTheme = useTheme();

    return (
        <UserInfoWrapper>
            <Text type={TextType.name}>
                {props.user.name},{props.user.age}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text type={TextType.geo} style={{ paddingRight: CurrentTheme.spacer }}>
                    Live in {props.user.lives}
                </Text>
                <LocationSVG color={CurrentTheme.colors.componentLabel} size={14} strokeWidth={2} />
            </View>
            <SeparatorVertical height={SeparatorVerticalType.small} />
            <Text type={TextType.header}>Interested</Text>
            <PassionsWrapper>
                {props.user.passions.map((item, index) => {
                    const n = Math.floor(Math.random() * 10);
                    const boxColor = Palette[n].color;
                    const labelColor = Palette[n].labelColor;

                    return (
                        <PassionView key={index.toString()} backgroundColor={boxColor}>
                            <PassionLabel color={labelColor}>{item}</PassionLabel>
                        </PassionView>
                    );
                })}
            </PassionsWrapper>
            <SeparatorVertical height={SeparatorVerticalType.small} />
            <Text type={TextType.header}>About</Text>
            <Text type={TextType.regular}>{props.user.bio}</Text>
        </UserInfoWrapper>
    );
};
