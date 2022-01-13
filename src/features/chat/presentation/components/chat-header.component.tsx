import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components/native';

import { User } from '../../../../core/model/user.model';

import { Avatar } from './styled/avatar-image.styled';
import { Back } from './styled/header-back-text';
import { HeaderContainer } from './styled/header-container-view.styled';
import { Name } from './styled/header-name-text.styled';

export type chatHeaderProps = {
    goBack: () => void;
    user: User;
    expandCard: () => void;
};

export const ChatHeader: React.FC<chatHeaderProps> = (props: chatHeaderProps) => {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <HeaderContainer>
            <View style={{ flex: 1, paddingLeft: theme.spacer }}>
                <Pressable onPress={props.goBack}>
                    <Back>{t('auth.return')}</Back>
                </Pressable>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Name>{props.user.name}</Name>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: theme.spacer }}>
                <Pressable onPress={props.expandCard}>
                    <SharedElement id={`user_image.${props.user.id}`}>
                        <Avatar source={{ uri: props.user.photo.link }} />
                    </SharedElement>
                </Pressable>
            </View>
        </HeaderContainer>
    );
};
