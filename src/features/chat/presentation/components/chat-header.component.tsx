import React from 'react';
import { Pressable, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useTheme } from 'styled-components/native';

import { User } from '../../data/database/model/user.model';

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

    return (
        <HeaderContainer>
            <View style={{ flex: 1, paddingLeft: theme.spacer }}>
                <Pressable onPress={props.goBack}>
                    <Back>{'<'}</Back>
                </Pressable>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Name>{props.user.name}</Name>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: theme.spacer }}>
                <Pressable onPress={props.expandCard}>
                    <SharedElement id={`user_image.${props.user.userId}`}>
                        <Avatar source={{ uri: props.user.photo }} />
                    </SharedElement>
                </Pressable>
            </View>
        </HeaderContainer>
    );
};
