/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View } from 'react-native';

import { User } from '../../../../core/model/user.model';
import { Avatar } from '../../../../core/presentation/components/container/avatar.styled';
import { Messages } from '../../../../mocks/messages.data';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

import { Date } from './styled/chats-item-last-date.styled';
import { LastMessage } from './styled/chats-item-last-message.styled';
import { Name } from './styled/chats-item-name.styled';
import { ChatsItemView } from './styled/chats-item-view.styled';

export type ChatsItemProps = {
    navigation: ChatsListScreenNavigationProp;
    user: User;
};

export const ChatsItem: React.FC<ChatsItemProps> = (props: ChatsItemProps) => {
    return (
        <ChatsItemView onPress={() => props.navigation.navigate('Chat', { user: props.user })}>
            <Avatar source={{ uri: props.user.imgUrl }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Name>{props.user.name}</Name>
                <LastMessage numberOfLines={2} ellipsizeMode={'tail'}>
                    {Messages[0].text}
                </LastMessage>
            </View>
            <Date>
                {Messages[0].createdAt.getHours().toString()}:{Messages[0].createdAt.getMinutes().toString()}
            </Date>
        </ChatsItemView>
    );
};
