import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import { LocationSVG } from '../../../../assets/components/location-icon.component';
import { User } from '../../../model/user.model';
import { Palette } from '../../themes/palette.themes';
import { SeparatorVerticalType, TextType } from '../../themes/types';
import { SeparatorVertical } from '../container/separator-vertical.styled';
import { Text } from '../text/text.styled';

import { PassionsWrapper } from './styled/passins-wrapper.styled';
import { PassionLabel } from './styled/passion-label.styled';
import { PassionView } from './styled/passion-view.styled';
import { UserInfoWrapper } from './styled/user-info-wrapper.styled';

type UserInfoProps = {
    user: User;
};

export const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
    const currentTheme = useTheme();
    const { t } = useTranslation();

    return (
        <UserInfoWrapper>
            <Text type={TextType.name}>
                {props.user.name},{props.user.age}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text type={TextType.geo} style={{ paddingRight: currentTheme.spacer }}>
                    {t('profile.livesIn')}
                    {props.user.city.name}
                </Text>
                <LocationSVG color={currentTheme.colors.componentLabel} size={14} strokeWidth={2} />
            </View>

            <SeparatorVertical height={SeparatorVerticalType.small} />

            { props.user?.passions && <>
                <Text type={TextType.header}>{t('profile.passions')}</Text>
                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
                
                <PassionsWrapper>
                    {props.user.passions.map((item, index) => {
                        const n = Math.floor(Math.random() * 10);
                        const boxColor = Palette[n].color;
                        const labelColor = Palette[n].labelColor;
    
                        return (
                            <PassionView key={index.toString()} backgroundColor={boxColor}>
                                <PassionLabel color={labelColor}>{item.description}</PassionLabel>
                            </PassionView>
                        );
                    })}
                </PassionsWrapper>
    
                <SeparatorVertical height={SeparatorVerticalType.small} />
            </>}

            <Text type={TextType.header}>{t('profile.about')}</Text>
            <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            <Text type={TextType.regular}>{props.user.bio}</Text>
        </UserInfoWrapper>
    );
};
