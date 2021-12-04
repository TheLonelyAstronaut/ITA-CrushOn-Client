import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Text } from '../../../../core/presentation/components/text/text.styled';
import { TextType } from '../../../../core/presentation/themes/types';

import { Avatar } from './styled/avatar-image.styled';
import { HeaderContainer } from './styled/header-container-view.styled';

export type chatHeaderProps = {
    goBack: () => void;
    name?: string;
    photoUrl?: string;
};

export const ChatHeader: React.FC<chatHeaderProps> = (props: chatHeaderProps) => {
    const theme = useTheme();
    return (
        <HeaderContainer>
            <View style={{ flex: 1, paddingLeft: theme.spacer }}>
                <Pressable onPress={props.goBack}>
                    <Text type={TextType.label}>Back</Text>
                </Pressable>
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text type={TextType.cardName}>{props.name}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: theme.spacer }}>
                <Avatar source={{ uri: props.photoUrl }} />
            </View>
        </HeaderContainer>
    );
};
